package com.educlick.monitoring.service;

import com.educlick.monitoring.kafka.ClickProducer;
import com.educlick.monitoring.repository.CourseClickRepository;
import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ClickService {

    private final ClickProducer clickProducer; // Kafka producer to publish click events
    private final CourseClickRepository courseClickRepository;

    // Micrometer Metrics
    private final Timer handleClickTimer; // Tracks execution time of click processing
    private final Timer fetchClickSummaryTimer; // Tracks execution time of summary fetching
    private final Counter buyClickCounter; // Counts total BUY actions
    private final Counter enrollClickCounter; // Counts total ENROLL actions

    // Constructor injection for immutability & testing
    public ClickService(
            ClickProducer clickProducer,
            CourseClickRepository courseClickRepository,
            MeterRegistry meterRegistry
    ) {
        this.clickProducer = clickProducer;
        this.courseClickRepository = courseClickRepository;

        // Timer to measure business logic performance
        this.handleClickTimer = Timer.builder("click_service_handle_click_time")
                .description("Time taken to process a click")
                .register(meterRegistry);

        // Timer to measure summary query performance
        this.fetchClickSummaryTimer = Timer.builder("click_service_get_click_summary_time")
                .description("Time taken to fetch click summary")
                .register(meterRegistry);

        // Counter metric tagged for BUY action
        this.buyClickCounter = Counter.builder("course_clicks_total")
                .tag("action", "BUY")
                .description("Total BUY clicks")
                .register(meterRegistry);

        // Counter metric tagged for ENROLL action
        this.enrollClickCounter = Counter.builder("course_clicks_total")
                .tag("action", "ENROLL")
                .description("Total ENROLL clicks")
                .register(meterRegistry);
    }

    public void handleClick(Long courseId, String action) {

        // Measure total time taken to send event to Kafka
        handleClickTimer.record(() -> {
            clickProducer.sendClick(courseId + "," + action); // Publish click event asynchronously
        });

        // Increment corresponding metric counter based on action type
        if ("BUY".equalsIgnoreCase(action)) {
            buyClickCounter.increment();
        } else if ("ENROLL".equalsIgnoreCase(action)) {
            enrollClickCounter.increment();
        }
    }

    public List<Map<String, Object>> getClickSummary() {

        // Measure database query + transformation time
        return fetchClickSummaryTimer.record(() ->
                courseClickRepository.getClickSummary() // Fetch aggregated data from DB
                        .stream()
                        .map(object -> {
                            Map<String, Object> map = new HashMap<>(); // Convert raw query result into structured response
                            map.put("course", "Course " + object[0]);
                            map.put("BUY", ((Number) object[1]).longValue());
                            map.put("ENROLL", ((Number) object[2]).longValue());
                            return map;
                        })
                        .collect(Collectors.toList())
        );
    }
}
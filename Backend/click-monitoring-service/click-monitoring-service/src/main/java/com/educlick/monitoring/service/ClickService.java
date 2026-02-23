package com.educlick.monitoring.service;

import com.educlick.monitoring.kafka.ClickProducer;
import com.educlick.monitoring.repository.CourseClickRepository;
import io.micrometer.core.instrument.MeterRegistry;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ClickService {

    private final ClickProducer clickProducer;
    private final CourseClickRepository courseClickRepository;
    private final MeterRegistry meterRegistry; // Used for Prometheus metrics tracking

    public void handleClick(Long courseId, String action){

        clickProducer.sendClick(courseId + "," + action); // Sends click event to Kafka queue

        // Records metric counter for monitoring user interactions
        meterRegistry.counter("course_clicks_total",
                "courseId", String.valueOf(courseId),
                "action", action
        ).increment();
    }

    public List<Map<String, Object>> getClickSummary(){

        // Aggregates database metrics into dashboard friendly format
        return courseClickRepository.getClickSummary()
                .stream()
                .map(object -> {
                    Map<String, Object> map = new HashMap<>();
                    map.put("course", "Course " + object[0]);
                    map.put("BUY", ((Number) object[1]).longValue());
                    map.put("ENROLL", ((Number) object[2]).longValue());
                    return map;
                })
                .collect(Collectors.toList());
    }
}
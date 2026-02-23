package com.educlick.monitoring.kafka;

import com.educlick.monitoring.entity.CourseClick;
import com.educlick.monitoring.repository.CourseClickRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ClickConsumer {

    private final CourseClickRepository courseClickRepository;

    @KafkaListener(topics = "${app.kafka.topic}") // Listens to configured Kafka topic for click events
    public void consumeClick(String message){

        // Parses incoming Kafka message (format: courseId,action)
        String[] messageParts = message.split(",");
        Long courseId = Long.parseLong(messageParts[0]);
        String action = messageParts[1];

        // Builds CourseClick entity from consumed message
        CourseClick courseClickInfo = CourseClick.builder()
                .courseId(courseId)
                .action(action)
                .build();

        courseClickRepository.save(courseClickInfo); // Persists click event into database
    }
}
package com.educlick.monitoring.kafka;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ClickProducer {

    private final KafkaTemplate<String, String> kafkaTemplate; // Kafka template used to publish messages

    @Value("${app.kafka.topic}") // Loads Kafka topic name from application configuration
    private String topic;

    public void sendClick(String message){
        kafkaTemplate.send(topic, message); // Publishes click event message to Kafka topic
    }
}
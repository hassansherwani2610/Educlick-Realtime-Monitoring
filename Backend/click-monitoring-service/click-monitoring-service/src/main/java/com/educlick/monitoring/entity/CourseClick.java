package com.educlick.monitoring.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "course_clicks") // Specifies the table name in DB
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder // Enables builder pattern for cleaner object creation
public class CourseClick {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment primary key
    private Long id;

    private Long courseId; // Stores the course identifier linked to the click event

    private String action; // Stores user action type (BUY or ENROLL)
}
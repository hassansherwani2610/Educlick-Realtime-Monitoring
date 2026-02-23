package com.educlick.monitoring.repository;

import com.educlick.monitoring.entity.CourseClick;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseClickRepository extends JpaRepository<CourseClick, Long> {

    @Query("""
        SELECT c.courseId as courseId,
            SUM(CASE WHEN c.action = 'BUY' THEN 1 ELSE 0 END) as buyCount,
            SUM(CASE WHEN c.action = 'ENROLL' THEN 1 ELSE 0 END) as enrollCount
        FROM CourseClick c
        GROUP BY c.courseId
    """)
    List<Object[]> getClickSummary(); // Aggregates click metrics for dashboard visualization
}
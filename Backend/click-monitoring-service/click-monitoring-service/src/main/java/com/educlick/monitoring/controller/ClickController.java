package com.educlick.monitoring.controller;

import com.educlick.monitoring.entity.CourseClick;
import com.educlick.monitoring.service.ClickService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api") // Base URL for all endpoints in this controller
@RequiredArgsConstructor
@CrossOrigin // Allows frontend (different port) to access these APIs
public class ClickController {

    private final ClickService clickService;

    @PostMapping("/click")
    public void click(@RequestBody CourseClick requestInfo){
        // Delegates click tracking logic to service layer
        clickService.handleClick(requestInfo.getCourseId(), requestInfo.getAction());
    }

    @GetMapping("/metrics/click-summary")
    public List<Map<String, Object>> summary(){
        // Returns aggregated click metrics for dashboard visualization
        return clickService.getClickSummary();
    }
}
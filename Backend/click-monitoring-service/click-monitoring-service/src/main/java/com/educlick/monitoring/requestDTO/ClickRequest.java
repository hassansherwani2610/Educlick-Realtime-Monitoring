package com.educlick.monitoring.requestDTO;

import lombok.Data;

@Data
public class ClickRequest {
    private Long courseId; // ID of course being clicked
    private String action; // User action type (BUY or ENROLL)
}
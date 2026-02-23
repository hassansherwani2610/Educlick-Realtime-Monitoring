package com.educlick.monitoring.responseDTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ClickSummaryResponse {
    private String course; // Course name or identifier for dashboard display
    private Long buyCount; // Total BUY clicks count
    private Long enrollCount; // Total ENROLL clicks count
}
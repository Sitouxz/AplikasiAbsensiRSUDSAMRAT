package rsud.samrat.springboot.Attendance.DTOs;

import java.util.Map;

public class AttendanceQualityResponseDTO {
    private Long employeeId;
    private String employeeName;
    private int month;
    private Map<String, Integer> attendanceStatusCount;
    private double qualityRate;

    // Constructors, getters, setters
}

package rsud.samrat.springboot.Attendance.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttendanceFilterDTO {
    private String employeeName;
    private Long employeeId;
    private LocalDate scheduleDate;
    private Long shiftId;
    private String placementName;

}



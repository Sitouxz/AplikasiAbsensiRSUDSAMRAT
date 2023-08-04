package rsud.samrat.springboot.Schedule.DTOs;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import rsud.samrat.springboot.Attendance.DTOs.AttendanceCreateResponseDTO;
import rsud.samrat.springboot.Employee.DTOs.CreateEmployeeResponseDTO;
import rsud.samrat.springboot.Shift.DTOs.ShiftResponseDTO;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleResponseDTO {
    @JsonProperty("scheduleId")
    private Long scheduleId;
    private List<CreateEmployeeResponseDTO> employee;
    private ShiftResponseDTO shift;
    private LocalDate scheduleDate;
    private List<AttendanceCreateResponseDTO> attendances;

}

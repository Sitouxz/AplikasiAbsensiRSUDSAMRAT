package rsud.samrat.springboot.Attendance.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateResponseDTO;
import rsud.samrat.springboot.Shift.DTOs.ShiftResponseDTO;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttendanceScheduleDTO {
    private Long scheduleId;
    private LocalDate scheduleDate;
    private ShiftResponseDTO shift;
    private LocationsCreateResponseDTO location;
    private List<AttendanceCreateResponseDTO> attendances = new ArrayList<>();
}

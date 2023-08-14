package rsud.samrat.springboot.Schedule.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import rsud.samrat.springboot.Employee.DTOs.CreateEmployeeResponseDTO;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateResponseDTO;
import rsud.samrat.springboot.Shift.DTOs.ShiftResponseDTO;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleAndEmployeeResponseDTO {
    private Long scheduleId;
    private ShiftResponseDTO shift;
    private LocalDate scheduleDate;
    private List<CreateEmployeeResponseDTO> employees = new ArrayList<>();
    private LocationsCreateResponseDTO location;
}


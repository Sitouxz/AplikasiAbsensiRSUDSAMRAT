package rsud.samrat.springboot.Employee.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddEmployeeToScheduleRequestDTO {
    private Long employeeId;
    private Long scheduleId;
}

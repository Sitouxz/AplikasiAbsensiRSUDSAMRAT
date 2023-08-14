package rsud.samrat.springboot.Employee.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import rsud.samrat.springboot.Placement.DTOs.PlacementCreateResponseDTO;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GetAllEmployeeResponseDTO {
    private Long employeeId;
    private String name;
    private String role;
    private PlacementCreateResponseDTO placement;

}

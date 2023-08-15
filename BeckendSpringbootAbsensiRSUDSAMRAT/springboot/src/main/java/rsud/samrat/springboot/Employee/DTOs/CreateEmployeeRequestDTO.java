package rsud.samrat.springboot.Employee.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateEmployeeRequestDTO {
    private String name;
    private String nik;
    private String password;
    private String role;
    private Long placementId;
}


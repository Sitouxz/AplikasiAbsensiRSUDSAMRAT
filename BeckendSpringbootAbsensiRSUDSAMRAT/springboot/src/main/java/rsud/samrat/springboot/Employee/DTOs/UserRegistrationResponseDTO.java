package rsud.samrat.springboot.Employee.DTOs;


import lombok.Data;

@Data
public class UserRegistrationResponseDTO {
    private String nik;
    private String password;
    private String access_token;
    private String _id;
    private int __v;
}

package rsud.samrat.springboot.Shift.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ShiftResponseDTO {
    private Long shift_id;
    private String name;
    private LocalTime start_time;
    private LocalTime end_time;

}


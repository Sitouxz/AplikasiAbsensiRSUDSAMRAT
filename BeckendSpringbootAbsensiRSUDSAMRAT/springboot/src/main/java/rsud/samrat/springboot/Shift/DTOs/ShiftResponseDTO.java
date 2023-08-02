package rsud.samrat.springboot.Shift.DTOs;

import lombok.Data;
import java.time.LocalTime;

@Data
public class ShiftResponseDTO {
    private Long shift_id;
    private String name;
    private LocalTime start_time;
    private LocalTime end_time;

}


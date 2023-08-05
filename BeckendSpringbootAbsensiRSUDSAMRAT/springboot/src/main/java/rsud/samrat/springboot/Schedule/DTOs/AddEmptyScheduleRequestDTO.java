package rsud.samrat.springboot.Schedule.DTOs;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddEmptyScheduleRequestDTO {
    private Long shiftId;
    private LocalDate scheduleDate;
}

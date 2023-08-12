package rsud.samrat.springboot.Schedule.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddScheduleWithTimeRangeRequestDTO {
    private Long shiftId;
    private LocalDate startDate;
    private LocalDate endDate;
    private List<Long> locationIds;
}


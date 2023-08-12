package rsud.samrat.springboot.Attendance.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttendanceScheduleIdDTO {


    //todo : remove null value in response payload
    private Long scheduleId;
    private List<AttendanceCreateResponseDTO> attendances = new ArrayList<>();
}



package rsud.samrat.springboot.Attendance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rsud.samrat.springboot.Attendance.DTOs.AttendanceCreateRequestDTO;
import rsud.samrat.springboot.Attendance.DTOs.AttendanceCreateResponseDTO;

@RestController
@RequestMapping("/api/v1/dev/attendances")
public class AttendanceController {

    private final AttendanceService attendanceService;

    @Autowired
    public AttendanceController(AttendanceService attendanceService) {
        this.attendanceService = attendanceService;
    }

    @PostMapping
    public ResponseEntity<AttendanceCreateResponseDTO> addAttendanceToSchedule(@RequestBody AttendanceCreateRequestDTO requestDTO) {
        AttendanceCreateResponseDTO responseDTO = attendanceService.addAttendanceToSchedule(requestDTO);
        return new ResponseEntity<>(responseDTO, HttpStatus.CREATED);
    }
}

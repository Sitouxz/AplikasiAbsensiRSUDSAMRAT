package rsud.samrat.springboot.Attendance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rsud.samrat.springboot.Attendance.DTOs.AttendanceCreateRequestDTO;
import rsud.samrat.springboot.Attendance.DTOs.AttendanceCreateResponseDTO;

import java.time.LocalDate;
import java.util.List;

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

    @GetMapping("/date/{attendanceDate}")
    public ResponseEntity<List<AttendanceCreateResponseDTO>> getAttendanceByDate(
            @PathVariable("attendanceDate") String attendanceDateStr
    ) {
        try {
            LocalDate attendanceDate = LocalDate.parse(attendanceDateStr);
            List<AttendanceCreateResponseDTO> attendanceList = attendanceService.getAllAttendanceByDate(attendanceDate);
            return new ResponseEntity<>(attendanceList, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}

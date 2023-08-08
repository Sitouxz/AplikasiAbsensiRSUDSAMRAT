package rsud.samrat.springboot.Attendance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rsud.samrat.springboot.Attendance.DTOs.*;
import rsud.samrat.springboot.Exception.NotFoundException;

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

    @PostMapping("/checkInMasuk")
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

    @PostMapping("/updatePulang")
    public ResponseEntity<String> updateAttendanceStatusAndCheckoutDetails(@RequestBody AttendanceUpdateRequestDTO requestDTO) {
        try {
            attendanceService.updateAttendanceStatusAndCheckoutDetails(requestDTO);
            return new ResponseEntity<>("Attendance status and checkout details updated successfully.", HttpStatus.OK);
        } catch (NotFoundException e) {
            return new ResponseEntity<>("Attendance not found.", HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>("Error occurred while updating attendance.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/byDateAndEmployee")
    public ResponseEntity<List<AttendanceCreateResponseDTO>> getAttendanceByDateAndEmployee(
            @RequestParam("attendanceDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate attendanceDate,
            @RequestParam("employeeId") Long employeeId
    ) {
        try {
            List<AttendanceCreateResponseDTO> attendanceList = attendanceService.getAllAttendanceByDateAndEmployee(attendanceDate, employeeId);
            if (attendanceList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(attendanceList, HttpStatus.OK);
        } catch (NotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all-with-schedule")
    public ResponseEntity<List<AttendanceScheduleDTO>> getAllAttendanceWithSchedule() {
        List<AttendanceScheduleDTO> attendanceWithSchedule = attendanceService.getAllAttendanceWithSchedule();
        return new ResponseEntity<>(attendanceWithSchedule, HttpStatus.OK);
    }

    @GetMapping("/all-with-schedule-id")
    public ResponseEntity<List<AttendanceScheduleIdDTO>> getAllAttendanceWithScheduleId() {
        List<AttendanceScheduleIdDTO> attendanceWithScheduleId = attendanceService.getAllAttendanceWithScheduleId();
        return new ResponseEntity<>(attendanceWithScheduleId, HttpStatus.OK);
    }
}

package rsud.samrat.springboot.Attendance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
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
    public ResponseEntity<?> addAttendanceToSchedule(
            @RequestParam(value = "selfieCheckInImage", required = false) MultipartFile selfieCheckInImage,
            @ModelAttribute AttendanceCreateRequestDTO requestDTO) {
        try {
            AttendanceCreateResponseDTO responseDTO =   attendanceService.addAttendanceToSchedule(requestDTO, selfieCheckInImage);
            return new ResponseEntity<>(responseDTO, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
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
    public ResponseEntity<String> updateAttendanceStatusAndCheckoutDetails(
            @RequestParam(value = "selfieCheckOutImage", required = false) MultipartFile selfieCheckOutImage,
            @ModelAttribute AttendanceUpdateRequestDTO requestDTO) {
        try {
            attendanceService.updateAttendanceStatusAndCheckoutDetails(requestDTO, selfieCheckOutImage);
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

    @GetMapping("/filter")
    public ResponseEntity<List<AttendanceScheduleIdDTO>> filterAttendances(
            @RequestParam(required = false) String employeeName,
            @RequestParam(required = false) Long employeeId, // Add employeeId parameter
            @RequestParam(required = false) String scheduleDate,
            @RequestParam(required = false) Long shiftId,
            @RequestParam(required = false) String placementName) {

        AttendanceFilterDTO filterDTO = new AttendanceFilterDTO();
        filterDTO.setEmployeeName(employeeName);
        filterDTO.setEmployeeId(employeeId); // Set the employeeId filter

        if (scheduleDate != null) {
            filterDTO.setScheduleDate(LocalDate.parse(scheduleDate));
        }

        filterDTO.setShiftId(shiftId);
        filterDTO.setPlacementName(placementName);

        List<AttendanceScheduleIdDTO> filteredAttendances = attendanceService.filterAttendances(filterDTO);

        if (!filteredAttendances.isEmpty()) {
            return new ResponseEntity<>(filteredAttendances, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}

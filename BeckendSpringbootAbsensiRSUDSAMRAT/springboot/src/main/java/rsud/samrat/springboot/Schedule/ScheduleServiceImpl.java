package rsud.samrat.springboot.Schedule;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rsud.samrat.springboot.Attendance.AttendanceModel;
import rsud.samrat.springboot.Employee.EmployeeModel;
import rsud.samrat.springboot.Employee.EmployeeRepository;
import rsud.samrat.springboot.Schedule.DTOs.AddEmptyScheduleRequestDTO;
import rsud.samrat.springboot.Schedule.DTOs.ScheduleResponseDTO;
import rsud.samrat.springboot.Shift.ShiftModel;
import rsud.samrat.springboot.Shift.ShiftRepository;

import java.time.LocalDate;
import java.util.Collections;
import java.util.Optional;

@Service
public class ScheduleServiceImpl implements ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private ShiftRepository shiftRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ScheduleResponseDTO addEmptySchedule(AddEmptyScheduleRequestDTO requestDTO) {
        // Fetch the ShiftModel using the provided shiftId
        Optional<ShiftModel> shiftOptional = shiftRepository.findById(requestDTO.getShiftId());
        ShiftModel shift = shiftOptional.orElse(null);

        if (shift == null) {

            return null;
        }


        ScheduleModel emptySchedule = new ScheduleModel();
        emptySchedule.setShift(shift);
        emptySchedule.setSchedule_date(requestDTO.getScheduleDate());


        emptySchedule.setAttendances(Collections.emptyList());


        ScheduleModel savedSchedule = scheduleRepository.save(emptySchedule);


        ScheduleResponseDTO responseDTO = modelMapper.map(savedSchedule, ScheduleResponseDTO.class);


        if (responseDTO.getEmployee() == null) {
            responseDTO.setEmployee(Collections.emptyList());
        }

        return responseDTO;
    }





}

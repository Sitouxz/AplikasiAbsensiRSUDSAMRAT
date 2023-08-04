package rsud.samrat.springboot.Utility;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import rsud.samrat.springboot.Attendance.AttendanceModel;
import rsud.samrat.springboot.Attendance.DTOs.AttendanceCreateRequestDTO;
import rsud.samrat.springboot.Attendance.DTOs.AttendanceCreateResponseDTO;
import rsud.samrat.springboot.Employee.EmployeeModel;
import rsud.samrat.springboot.Schedule.DTOs.ScheduleResponseDTO;
import rsud.samrat.springboot.Schedule.ScheduleModel;

import java.util.stream.Collectors;

@Configuration
public class ModelMapperConfig {

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();

        //ScheduleCustomMap
        modelMapper.typeMap(ScheduleModel.class, ScheduleResponseDTO.class)
                .addMapping(ScheduleModel::getSchedule_id, ScheduleResponseDTO::setScheduleId);

        modelMapper.typeMap(ScheduleModel.class, ScheduleResponseDTO.class)
                .addMapping(ScheduleModel::getEmployees, ScheduleResponseDTO::setEmployee);

        modelMapper.typeMap(AttendanceModel.class, AttendanceCreateResponseDTO.class)
                .addMapping(src -> src.getSchedule().getSchedule_date(), AttendanceCreateResponseDTO::setScheduleDate)
                .addMapping(src -> src.getSchedule().getShift(), AttendanceCreateResponseDTO::setShift);

        // Schedule Custom Map
        modelMapper.typeMap(ScheduleModel.class, ScheduleResponseDTO.class)
                .addMapping(ScheduleModel::getSchedule_id, ScheduleResponseDTO::setScheduleId)
                .addMapping(src -> src.getEmployees() != null ? src.getEmployees().stream().map(EmployeeModel::getEmployee_id).collect(Collectors.toList()) : null, ScheduleResponseDTO::setEmployee);

        // Attendance Custom Map
        modelMapper.typeMap(AttendanceModel.class, AttendanceCreateResponseDTO.class)
                .addMapping(src -> src.getSchedule().getSchedule_date(), AttendanceCreateResponseDTO::setScheduleDate)
                .addMapping(src -> src.getSchedule().getShift(), AttendanceCreateResponseDTO::setShift)
                .addMapping(src -> src.getClock_in() != null ? src.getClock_in().toLocalTime() : null, AttendanceCreateResponseDTO::setClockIn)
                .addMapping(src -> src.getClock_out() != null ? src.getClock_out().toLocalTime() : null, AttendanceCreateResponseDTO::setClockOut)
                .addMapping(AttendanceModel::getLocation_lat, AttendanceCreateResponseDTO::setLocationLat)
                .addMapping(AttendanceModel::getLocation_long, AttendanceCreateResponseDTO::setLocationLong)
                .addMapping(AttendanceModel::getSelfie_url, AttendanceCreateResponseDTO::setSelfieUrl);


        return modelMapper;
    }
}

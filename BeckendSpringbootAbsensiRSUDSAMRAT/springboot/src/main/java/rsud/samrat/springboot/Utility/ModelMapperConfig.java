package rsud.samrat.springboot.Utility;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import rsud.samrat.springboot.Attendance.AttendanceModel;
import rsud.samrat.springboot.Attendance.DTOs.AttendanceCreateRequestDTO;
import rsud.samrat.springboot.Attendance.DTOs.AttendanceCreateResponseDTO;
import rsud.samrat.springboot.Employee.DTOs.CreateEmployeeResponseDTO;
import rsud.samrat.springboot.Employee.EmployeeModel;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateResponseDTO;
import rsud.samrat.springboot.Locations.LocationModel;
import rsud.samrat.springboot.Schedule.DTOs.ScheduleResponseDTO;
import rsud.samrat.springboot.Schedule.ScheduleModel;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
@Configuration
public class ModelMapperConfig {

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        // ScheduleModel to ScheduleResponseDTO mapping
        modelMapper.typeMap(ScheduleModel.class, ScheduleResponseDTO.class)
                .addMapping(ScheduleModel::getSchedule_id, ScheduleResponseDTO::setScheduleId)
                .addMapping(src -> mapEmployees(src.getEmployees(), modelMapper), ScheduleResponseDTO::setEmployee)
                .addMapping(ScheduleModel::getSchedule_date, ScheduleResponseDTO::setScheduleDate)
                .addMapping(src -> mapAttendances(src.getAttendances(), modelMapper), ScheduleResponseDTO::setAttendances);

        // EmployeeModel to CreateEmployeeResponseDTO mapping
        modelMapper.createTypeMap(EmployeeModel.class, CreateEmployeeResponseDTO.class)
                .addMapping(EmployeeModel::getEmployee_id, CreateEmployeeResponseDTO::setEmployeeId)
                .addMapping(EmployeeModel::getName, CreateEmployeeResponseDTO::setName)
                .addMapping(EmployeeModel::getRole, CreateEmployeeResponseDTO::setRole);

        // AttendanceModel to AttendanceCreateResponseDTO mapping
        modelMapper.createTypeMap(AttendanceModel.class, AttendanceCreateResponseDTO.class)
                .addMapping(src -> src.getSchedule().getSchedule_date(), AttendanceCreateResponseDTO::setScheduleDate)
                .addMapping(src -> src.getSchedule().getShift(), AttendanceCreateResponseDTO::setShift)
                .addMapping(AttendanceModel::getClock_in, AttendanceCreateResponseDTO::setClockIn)
                .addMapping(AttendanceModel::getClock_out, AttendanceCreateResponseDTO::setClockOut)
                .addMapping(AttendanceModel::getLocation_lat_In, AttendanceCreateResponseDTO::setLocationLatIn)
                .addMapping(AttendanceModel::getLocation_long_In, AttendanceCreateResponseDTO::setLocationLongIn)
                .addMapping(AttendanceModel::getLocation_lat_Out, AttendanceCreateResponseDTO::setLocationLatOut)
                .addMapping(AttendanceModel::getLocation_Long_Out, AttendanceCreateResponseDTO::setLocationLongOut)
                .addMapping(AttendanceModel::getSelfieCheckIn, AttendanceCreateResponseDTO::setSelfieCheckIn)
                .addMapping(AttendanceModel::getSelfieCheckIn, AttendanceCreateResponseDTO::setSelfieCheckIn);

        // Explicitly map properties for LocationModel to LocationsCreateResponseDTO
        modelMapper.createTypeMap(LocationModel.class, LocationsCreateResponseDTO.class)
                .addMapping(LocationModel::getLocationId, LocationsCreateResponseDTO::setLocationId)
                .addMapping(LocationModel::getLocationName, LocationsCreateResponseDTO::setLocationName)
                .addMapping(LocationModel::getLatitude, LocationsCreateResponseDTO::setLatitude)
                .addMapping(LocationModel::getLongitude, LocationsCreateResponseDTO::setLongitude);

        return modelMapper;
    }

    // Helper method to map AttendanceModel list to AttendanceCreateResponseDTO list
    private List<AttendanceCreateResponseDTO> mapAttendances(List<AttendanceModel> attendances, ModelMapper modelMapper) {
        if (attendances == null) {
            return Collections.emptyList();
        }
        return attendances.stream()
                .map(attendance -> modelMapper.map(attendance, AttendanceCreateResponseDTO.class))
                .collect(Collectors.toList());
    }

    // Helper method to map EmployeeModel list to CreateEmployeeResponseDTO list
    private List<CreateEmployeeResponseDTO> mapEmployees(List<EmployeeModel> employees, ModelMapper modelMapper) {
        if (employees == null) {
            return Collections.emptyList();
        }
        return employees.stream()
                .map(employee -> modelMapper.map(employee, CreateEmployeeResponseDTO.class))
                .collect(Collectors.toList());
    }
}





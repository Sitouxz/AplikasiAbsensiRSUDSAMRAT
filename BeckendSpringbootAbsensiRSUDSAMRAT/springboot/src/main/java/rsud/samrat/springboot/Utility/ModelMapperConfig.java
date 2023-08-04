package rsud.samrat.springboot.Utility;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import rsud.samrat.springboot.Schedule.DTOs.ScheduleResponseDTO;
import rsud.samrat.springboot.Schedule.ScheduleModel;

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

        return modelMapper;
    }
}

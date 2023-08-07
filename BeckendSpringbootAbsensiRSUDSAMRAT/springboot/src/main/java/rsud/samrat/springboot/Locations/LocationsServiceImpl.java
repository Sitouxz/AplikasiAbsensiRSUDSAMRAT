package rsud.samrat.springboot.Locations;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateRequestDTO;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateResponseDTO;

@Service
public class LocationsServiceImpl implements LocationsService {

    private final LocationRepository locationsRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public LocationsServiceImpl(LocationRepository locationsRepository, ModelMapper modelMapper) {
        this.locationsRepository = locationsRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public LocationsCreateResponseDTO createLocation(LocationsCreateRequestDTO requestDTO) {
        LocationModel location = modelMapper.map(requestDTO, LocationModel.class);
        LocationModel savedLocation = locationsRepository.save(location);
        return modelMapper.map(savedLocation, LocationsCreateResponseDTO.class);
    }
}


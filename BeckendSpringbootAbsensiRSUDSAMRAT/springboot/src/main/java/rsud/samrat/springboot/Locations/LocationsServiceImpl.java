package rsud.samrat.springboot.Locations;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rsud.samrat.springboot.Exception.NotFoundException;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateRequestDTO;
import rsud.samrat.springboot.Locations.DTOs.LocationsCreateResponseDTO;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public List<LocationsCreateResponseDTO> getAllLocations() {
        List<LocationModel> locations = locationsRepository.findAll();
        return locations.stream()
                .map(location -> modelMapper.map(location, LocationsCreateResponseDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public LocationsCreateResponseDTO getLocationById(Long locationId) {
        LocationModel location = getLocationOrThrow(locationId);
        return modelMapper.map(location, LocationsCreateResponseDTO.class);
    }

    @Override
    @Transactional
    public LocationsCreateResponseDTO updateLocation(Long locationId, LocationsCreateRequestDTO requestDTO) {
        LocationModel location = getLocationOrThrow(locationId);
        modelMapper.map(requestDTO, location); // Update the existing location
        return modelMapper.map(location, LocationsCreateResponseDTO.class);
    }

    @Override
    @Transactional
    public void deleteLocation(Long locationId) {
        LocationModel location = getLocationOrThrow(locationId);
        locationsRepository.delete(location);
    }

    private LocationModel getLocationOrThrow(Long locationId) {
        return locationsRepository.findById(locationId)
                .orElseThrow(() -> new NotFoundException("Location not found with id: " + locationId));
    }
}



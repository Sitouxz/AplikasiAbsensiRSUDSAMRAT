package rsud.samrat.springboot.Placement;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rsud.samrat.springboot.Placement.DTOs.PlacementCreateRequestDTO;
import rsud.samrat.springboot.Placement.DTOs.PlacementCreateResponseDTO;

@Service
public class PlacementServiceImpl implements PlacementService {

    private final PlacementRepository placementRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public PlacementServiceImpl(PlacementRepository placementRepository, ModelMapper modelMapper) {
        this.placementRepository = placementRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public PlacementCreateResponseDTO createPlacement(PlacementCreateRequestDTO placementCreateRequestDTO) {
        PlacementModel placement = modelMapper.map(placementCreateRequestDTO, PlacementModel.class);
        PlacementModel savedPlacement = placementRepository.save(placement);
        return modelMapper.map(savedPlacement, PlacementCreateResponseDTO.class);
    }


}

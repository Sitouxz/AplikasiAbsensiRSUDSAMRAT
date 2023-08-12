package rsud.samrat.springboot.Placement;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rsud.samrat.springboot.Exception.NotFoundException;
import rsud.samrat.springboot.Placement.DTOs.PlacementCreateRequestDTO;
import rsud.samrat.springboot.Placement.DTOs.PlacementCreateResponseDTO;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public PlacementCreateResponseDTO getPlacementById(Long placementId) {
        PlacementModel placement = placementRepository.findById(placementId)
                .orElseThrow(() -> new NotFoundException("Placement not found with id: " + placementId));
        return modelMapper.map(placement, PlacementCreateResponseDTO.class);
    }

    @Override
    public List<PlacementCreateResponseDTO> getAllPlacements() {
        List<PlacementModel> placements = placementRepository.findAll();
        return placements.stream()
                .map(placement -> modelMapper.map(placement, PlacementCreateResponseDTO.class))
                .collect(Collectors.toList());
    }


}

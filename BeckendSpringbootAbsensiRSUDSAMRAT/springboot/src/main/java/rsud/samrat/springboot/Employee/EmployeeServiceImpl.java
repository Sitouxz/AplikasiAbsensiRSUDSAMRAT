package rsud.samrat.springboot.Employee;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rsud.samrat.springboot.Employee.DTOs.CreateEmployeeRequestDTO;
import rsud.samrat.springboot.Employee.DTOs.CreateEmployeeResponseDTO;
import rsud.samrat.springboot.Employee.DTOs.GetAllEmployeeResponseDTO;
import rsud.samrat.springboot.Exception.NotFoundException;
import rsud.samrat.springboot.Placement.DTOs.PlacementCreateResponseDTO;
import rsud.samrat.springboot.Placement.PlacementModel;
import rsud.samrat.springboot.Placement.PlacementRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final PlacementRepository placementRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository employeeRepository, PlacementRepository placementRepository, ModelMapper modelMapper) {
        this.employeeRepository = employeeRepository;
        this.placementRepository = placementRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public CreateEmployeeResponseDTO createEmployee(CreateEmployeeRequestDTO createEmployeeRequestDTO) {
        EmployeeModel employee = modelMapper.map(createEmployeeRequestDTO, EmployeeModel.class);

        PlacementModel placement = placementRepository.findById(createEmployeeRequestDTO.getPlacementId())
                .orElseThrow(() -> new NotFoundException("Placement not found with id: " + createEmployeeRequestDTO.getPlacementId()));

        employee.setPlacement(placement);
        EmployeeModel savedEmployee = employeeRepository.save(employee);
        PlacementCreateResponseDTO placementResponseDTO = modelMapper.map(placement, PlacementCreateResponseDTO.class);
        CreateEmployeeResponseDTO responseDTO = modelMapper.map(savedEmployee, CreateEmployeeResponseDTO.class);
        responseDTO.setPlacement(placementResponseDTO);
        responseDTO.setEmployeeId(savedEmployee.getEmployee_id());

        return responseDTO;
    }

    // EmployeeServiceImpl.java
    @Override
    public List<GetAllEmployeeResponseDTO> getAllEmployees() {
        List<EmployeeModel> employees = employeeRepository.findAll();

        // Map each EmployeeModel to GetAllEmployeeResponseDTO
        return employees.stream()
                .map(employee -> {
                    GetAllEmployeeResponseDTO responseDTO = modelMapper.map(employee, GetAllEmployeeResponseDTO.class);
                    responseDTO.setEmployeeId(employee.getEmployee_id()); // Set the employeeId in the response
                    PlacementCreateResponseDTO placementResponseDTO = modelMapper.map(employee.getPlacement(), PlacementCreateResponseDTO.class);
                    responseDTO.setPlacement(placementResponseDTO);
                    return responseDTO;
                })
                .collect(Collectors.toList());
    }



}

package rsud.samrat.springboot.Shift;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
;
import java.util.List;

@Service
public class ShiftInitializationService {

    private final ShiftRepository shiftRepository;

    @Autowired
    public ShiftInitializationService(ShiftRepository shiftRepository) {
        this.shiftRepository = shiftRepository;
    }

    @PostConstruct
    public void initializeShifts() {
        if (shiftRepository.count() == 0) {
            List<ShiftModel> shifts = ShiftModel.initializeShifts();
            shiftRepository.saveAll(shifts);
        }
    }
}


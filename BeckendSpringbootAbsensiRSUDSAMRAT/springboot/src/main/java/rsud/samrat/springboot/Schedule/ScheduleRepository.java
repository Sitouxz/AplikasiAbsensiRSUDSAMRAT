package rsud.samrat.springboot.Schedule;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ScheduleRepository extends JpaRepository<ScheduleModel,Long> {

    @Query("SELECT s FROM ScheduleModel s LEFT JOIN FETCH s.employees WHERE s.schedule_id = ?1")
    Optional<ScheduleModel> findByIdWithEmployees(Long scheduleId);
}

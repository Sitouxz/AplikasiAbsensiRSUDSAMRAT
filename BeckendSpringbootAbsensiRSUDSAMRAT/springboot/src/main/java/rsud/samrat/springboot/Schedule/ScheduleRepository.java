package rsud.samrat.springboot.Schedule;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ScheduleRepository extends JpaRepository<ScheduleModel,Long> {

    @Query("SELECT s FROM ScheduleModel s LEFT JOIN FETCH s.employees WHERE s.schedule_id = ?1")
    Optional<ScheduleModel> findByIdWithEmployees(Long scheduleId);

    @Query("SELECT s FROM ScheduleModel s LEFT JOIN FETCH s.employees LEFT JOIN FETCH s.location WHERE s.schedule_id = :scheduleId")
    Optional<ScheduleModel> findByIdWithEmployeesAndLocation(@Param("scheduleId") Long scheduleId);

    @Query("SELECT s FROM ScheduleModel s LEFT JOIN FETCH s.attendances WHERE s.schedule_id = :scheduleId")
    Optional<ScheduleModel> findByIdWithAttendances(Long scheduleId);

    @Query("SELECT s FROM ScheduleModel s LEFT JOIN FETCH s.employees LEFT JOIN FETCH s.location")
    List<ScheduleModel> findAllWithEmployeesAndLocation();

}

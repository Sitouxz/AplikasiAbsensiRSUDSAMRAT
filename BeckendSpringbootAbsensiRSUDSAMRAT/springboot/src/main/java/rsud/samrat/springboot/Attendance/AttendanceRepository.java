package rsud.samrat.springboot.Attendance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import rsud.samrat.springboot.Employee.EmployeeModel;

import java.time.LocalDate;
import java.util.List;


@Repository
public interface AttendanceRepository extends JpaRepository<AttendanceModel,Long>{

    @Query("SELECT a FROM AttendanceModel a WHERE a.attendance_date = :attendanceDate")
    List<AttendanceModel> findAllByAttendanceDate(@Param("attendanceDate") LocalDate attendanceDate);


    @Query("SELECT a FROM AttendanceModel a JOIN a.employees e WHERE a.attendance_date = :attendanceDate AND e.employee_id = :employeeId")
    List<AttendanceModel> findAllByAttendanceDateAndEmployeeId(@Param("attendanceDate") LocalDate attendanceDate, @Param("employeeId") Long employeeId);

}

package rsud.samrat.springboot.Attendance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rsud.samrat.springboot.Employee.EmployeeModel;

import java.util.List;


@Repository
public interface AttendanceRepository extends JpaRepository<AttendanceModel,Long>{


    List<AttendanceModel> findByEmployee(EmployeeModel employee);
}

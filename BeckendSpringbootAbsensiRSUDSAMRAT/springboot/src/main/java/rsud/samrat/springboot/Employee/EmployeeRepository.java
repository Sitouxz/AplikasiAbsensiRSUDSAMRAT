package rsud.samrat.springboot.Employee;


import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeeRepository extends JpaRepository<EmployeeModel,Long> {


}

import { useEffect, useState } from "react";
import { getEmployee } from "./config/axios/employee/employee.api.js";

const App = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await getEmployee();
        setEmployee(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEmployeeData();
  }, []);

  return (
    <div>
      <div className="justify-center items-center h-screen">
        <p className="text text-7xl font-bold">ABSENSI RSUD SAMRAT</p>
        <table className="table table-lg">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Bagian</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employes) => (
              <tr key={employes.employeeId}>
                <td>{employes.employeeId}</td>
                <td>{employes.name}</td>
                <td>{employes.placement.name}</td>
                <td>{employes.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;

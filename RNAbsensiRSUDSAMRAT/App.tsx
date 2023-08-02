/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { useEffect, useState } from 'react';
import { getEmployee } from './src/config/employees/employees.api';
import { Employee } from './src/config/employees/employee.interface';
import { View, Text } from 'react-native';

const App = () => {
  const [employee, setEmployee] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await getEmployee();
        setEmployee(response)
      } catch(error){
        console.log(error);
      }
    };

    fetchEmployee();
  }, []);


  return (
    <View>
      {employee.map((emp) => (
        <View key={emp.employeeId}>
          <Text>Name: {emp.name}</Text>
          <Text>Role: {emp.role}</Text>
        </View>
      ))}
    </View>
  )
};

export default App;

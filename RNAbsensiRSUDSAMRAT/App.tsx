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
import { Login, SplashScreen } from './src/pages';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';

const App = () => {
  const [employee, setEmployee] = useState<Employee[]>([]);

  const Stack = createNativeStackNavigator();

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
    <>
      {/* {employee.map((emp) => (
        <View key={emp.employeeId}>
          <Text>Name: {emp.name}</Text>
          <Text>Role: {emp.role}</Text>
        </View>
      ))} */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='SplashScreen'
            component={SplashScreen}
          />
          <Stack.Screen
            name='Login'
            component={Login}
          />
          <Stack.Screen
            name='Home'
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
};

export default App;

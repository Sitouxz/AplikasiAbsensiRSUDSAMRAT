/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import {
  HomeIcon,
  CalendarIcon,
  UserIcon,
  DocumentIcon,
  BellIcon,
} from 'react-native-heroicons/outline';
import {Home, History, Attendance, Notification, Profile} from '../pages';

const Tab = createBottomTabNavigator();

const TabBarItem = ({iconName, focused, label}: any) => (
  <View style={{justifyContent: 'center', alignItems: 'center'}}>
    {iconName({size: 38, color: focused ? '#339993' : '#343435'})}
    <Text style={{color: focused ? '#339993' : '#343435', fontSize: 10}}>
      {label}
    </Text>
  </View>
);

const tabsConfig = [
  {name: 'Home', component: Home, icon: HomeIcon, label: 'Beranda'},
  {name: 'History', component: History, icon: CalendarIcon, label: 'Riwayat'},
  {name: 'Absen', component: Attendance, icon: DocumentIcon, label: 'Absen'},
  {
    name: 'Notifikasi',
    component: Notification,
    icon: BellIcon,
    label: 'Notifikasi',
  },
  {name: 'Profile', component: Profile, icon: UserIcon, label: 'Profil'},
];

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        elevation: 0.1,
        backgroundColor: '#EDEFF5',
        height: 92,
      },
    }}>
    {tabsConfig.map(({name, component, icon, label}) => (
      <Tab.Screen
        key={name}
        name={name}
        component={component}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabBarItem iconName={icon} focused={focused} label={label} />
          ),
        }}
      />
    ))}
  </Tab.Navigator>
);

export default Tabs;

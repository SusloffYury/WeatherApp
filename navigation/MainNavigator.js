import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DailyScreen from '../screens/DailyScreen';
import HourlyNavigator from './HourlyNavigator';
import CityNav from './ViewDetail';
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const MainNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={
        props.onLayout}>
      <Tab.Screen
        name='City'
        component={CityNav}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Daily'
        component={DailyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="calendar" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Hourly'
        component={HourlyNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-time-outline" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}


export default MainNavigator;

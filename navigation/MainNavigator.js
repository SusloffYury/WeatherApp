import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DailyScreen from '../screens/DailyScreen';
import HourlyScreen from '../screens/HourlyScreen';
import CityNav from './ViewDetail';


const Tab = createBottomTabNavigator();

const MainNavigator = props => {
  return (

    <Tab.Navigator screenOptions={props.onLayout}>
      <Tab.Screen
        name='City'
        component={CityNav}
      />
      <Tab.Screen
        name='Daily'
        component={DailyScreen}
        
      />
      <Tab.Screen
        name='Detail'
        component={HourlyScreen}
      />
    </Tab.Navigator>

  )
}
export default MainNavigator;

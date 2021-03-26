import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  DailyScreen  from '../screens/DailyScreen';
import  DetailScreen from '../screens/DetailScreen';
import  MainScreen  from '../screens/MainScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = props => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Main'
          component={MainScreen}
        />
        <Tab.Screen
          name='Daily'
          component={DailyScreen}
        />
        <Tab.Screen
          name='Detail'
          component={DetailScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default MainNavigator;
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import DayliScreen from '../screens/DailyScreen';

const Stack = createStackNavigator();

const DayliNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='City'
        component={DayliScreen}
        options ={DaylySign}
        />
    </Stack.Navigator>
    
  );
 }
 const DaylySign = () => {
  const { cityName } = useSelector(state => state.search)
  return ({
    title: `${cityName}`
  })
}
export default DayliNavigator;
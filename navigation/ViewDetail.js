import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen, { NavigateStyle } from '../screens/MainScreen';
import DetailScreen, { DetailHeader } from '../screens/DetailScreen';

const Stack = createStackNavigator();
const CityNav = props => {
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('tabPress', (e) => {
      e.preventDefault();
      props.navigation.navigate('City')
    });
    return unsubscribe;
  }, [props.navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={NavigateStyle} />
      <Stack.Screen
        name="DetailCity"
        component={DetailScreen} 
        options ={DetailHeader}
        />
    </Stack.Navigator>
  )
}
export default CityNav;
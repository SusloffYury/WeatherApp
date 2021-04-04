import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen, { NavigateStyle } from '../screens/MainScreen';
import DetailScreen from '../screens/DetailScreen';


const Stack = createStackNavigator();

const CityNav = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={NavigateStyle} />
      <Stack.Screen name="DetailCity" component={DetailScreen} />
    </Stack.Navigator>
  )
}
export default CityNav;
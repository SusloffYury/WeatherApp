import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Options = ({ route }) => ({
  
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === 'City') {
      iconName = focused
        ? 'home'
        : 'home-outline';
    } else if (route.name === 'Daily') {
      iconName = focused ? 'calendar-outline' : 'calendar-sharp';
    }
    else if (route.name === 'Hourly') {
      iconName = focused ? 'time-outline' : 'time-sharp';
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  }

})
export default Options;

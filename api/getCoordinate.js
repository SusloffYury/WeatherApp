import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


const verifyPermission = async () => {
  const { status } = await Permissions.askAsync(Permissions.LOCATION)
  if (status !== 'granted') {
    Alert.alert(
      'Insufficient permissions!',
      'You need to grant location permissions to use this app.',
      [{ text: 'Okay' }]
    );
    return false;
  }
  return true;
}

const getLocationHandler = async () => {
  const hasPermission = await verifyPermission();
  if (!hasPermission) {
    return;
  }
  try {
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
    return {
      lat: latitude,
      lon: longitude,
    }

  } catch (err) {
    Alert.alert(
      'Could not fetch location!',
      'Please try again later .',
      [{ text: 'Okay' }]
    );
  }
}



export default getLocationHandler;

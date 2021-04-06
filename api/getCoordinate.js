import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export const getLocationHandler = async () => {
  // const [permission, askPermission] = usePermissions(Permissions.LOCATION, {});
  //  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  // if (status !== 'granted') {
  //   Alert.alert(
  //     'Insufficient permissions!',
  //     'You need to grant location permissions to use this app.',
  //     [{ text: 'Okay' }]
  //   );
  // console.log(askPermission)
  // console.log(permission)
  // if (!hasPermission) {
  //   return;
  
  try {
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
    // dispatch(SetUserCoordinate({ lat: latitude, lon: longitude }))
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
export default  getLocationHandler;



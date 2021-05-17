import { Alert } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


export const verifyPermission = async () => {
  const { status } = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND)
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
  
  const { coords: { latitude, longitude } } =
    await Location.getCurrentPositionAsync({});
  return {
    lat: latitude,
    lon: longitude,
  }
}
export default getLocationHandler;

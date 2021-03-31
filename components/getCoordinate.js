import React from 'react';
import { useDispatch } from 'react-redux';
import { SetUserCoordinate } from '../store/AppActions';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const LocationPicker = () => {
    const dispatch = useDispatch();
    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION);
        if (result.status !== 'granted') {
            Alert.alert(
                'Insufficeient permissions!',
                'You nee to grant location permissions',
                [{ text: 'Ok' }]
            );
            return false;
        }
        return true;
    };
    const getLocationHandler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return;
        }
        try {
            const location = await Location.getCurrentPositionAsync({
                timeout: 5000
            });
            dispatch(SetUserCoordinate({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }))
        } catch (err) {
            Alert.alert('Could not fetch location', 'Please try again later', [{ text: 'Ok' }])
        }
    }
    return getLocationHandler();
}
export default LocationPicker;

import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import { Platform, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
const shootImage = async () => {
  const granted = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        Alert.alert('Sorry, we need camera roll permissions to make this work!',
          'You need granted', [{ text: 'Ok' }]);
        return false;
      }
    }
    return true;
  };
  if (granted()) {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result.uri);
    return result.uri;
  }
};
export default shootImage;
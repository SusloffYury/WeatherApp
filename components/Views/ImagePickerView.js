import React, { useState } from 'react';
import PickImage from '../FunctionalComponents/imagePicker';
import ShootImage from '../FunctionalComponents/shotPhoto';
import {
  SafeAreaView, StyleSheet, View, TouchableOpacity
} from 'react-native';
import Colors from '../../constants/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { BottomSheet, ListItem } from 'react-native-elements'


const ImagePickerView = props => {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    {
      title: 'Open image',
      onPress: () => PickImage()

    },
    {
      title: 'Take image',
      onPress: () => ShootImage()
    },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: Colors.accent },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.screen}>
        <TouchableOpacity onPress={() => { setIsVisible(true) }}>
          <View style={styles.round}>
            <BottomSheet
              isVisible={isVisible}
              containerStyle={{ backgroundColor: Colors.accent }}
            >
              {list.map((l, i) => (
                <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                  <ListItem.Content>
                    <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </BottomSheet>
          </View>
        </TouchableOpacity>
      </View >
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    flex: 1
  },
  round: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.accent
  },
  safearea: {
    flex: 1
  }
})
export default ImagePickerView;

import React, { useState } from 'react';
import PickImage from '../FunctionalComponents/imagePicker';
import {
  SafeAreaView, StyleSheet, View, TouchableOpacity, Image, Text
} from 'react-native';
import Colors from '../../constants/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { BottomSheet, ListItem } from 'react-native-elements'
import * as Actions from '../../store/AppActions';

const ImagePickerView = props => {
  const { savePhotos: image } = useSelector(state => state.search)
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    {
      title: 'Open image',
      onPress: () => PickImage()

    },
    {
      title: 'Take image',
      onPress: () => Actions.SaveImage()
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
            {(image) ?
              <Image style={styles.image} source={image} /> :
              <Text style={styles.roundText}>No image </Text>}

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
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: Colors.accent
  },
  safearea: {
    flex: 1
  },
  roundText:{
    color:'white',
    zIndex:3,
  }
})
export default ImagePickerView;

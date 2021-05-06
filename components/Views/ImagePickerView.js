import React from 'react';
import {
  SafeAreaView, StyleSheet, View
} from 'react-native';
import Colors from '../../constants/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';



const ImagePickerView = props => {

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.screen}>
        <TouchableOpacity onPress={() => { console.log('Image') }}>
          <View style={styles.round}>
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
    width:100,
    height:100,
    borderRadius: 50,
    backgroundColor: Colors.accent
  },
  safearea: {
    flex: 1
  }
})
export default ImagePickerView;

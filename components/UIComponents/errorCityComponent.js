import React from 'react';
import Config from 'react-native-config/index'
import {
  Dimensions, Image, StyleSheet, Text, View
} from 'react-native';
import Color from '../../constants/Colors';
const itemWidth = (Dimensions.get('window').width);

const ErrorComponent = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/failIcon.png')} />
      </View>
      <View style={styles.sign}>
        <Text style={styles.signText}>No data for {props.enterData}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    margin: 10,
    flex: 1,
    backgroundColor: Config.COLOR
  },
  imageContainer: {
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Config.ACCENT
    },
  image: {
    width: itemWidth / 3,
    height: itemWidth / 3,

  },
  sign: {
    marginVertical: 20,
  },
  signText: {
    marginLeft: 20,
    fontSize: 40,
    fontWeight: '400',
  }
})

export default ErrorComponent;

import React from 'react';
import {
  Dimensions, Image, StyleSheet, Text, View
} from 'react-native';
import Color from '../../constants/Colors';
const itemWidth = (Dimensions.get('window').width - 10);
const itemHeight = (Dimensions.get('window').height - 10);
const NoInternet = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/failIcon.png')} />
          </View>
        <View style={styles.containerText}>
          <Text style={styles.largeText}>Internet is not available</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
        screen: {
        width: itemWidth,
    height: itemHeight,
    backgroundColor: Color.primary
  },
  imageContainer: {
        justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  image: {
        width: itemWidth / 3,
    height: itemWidth / 3,

  },
  sign: {
        marginVertical: 20,
  },
  largeText: {
        fontSize: 30,
    fontWeight: '400',
    marginTop: 20,
  },
  smallText: {
        fontSize: 15,
    marginVertical: 10,
  },
})
export default NoInternet;

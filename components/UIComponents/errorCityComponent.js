import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
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
    backgroundColor: Color.primary
  },
  imageContainer: {
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.accent
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

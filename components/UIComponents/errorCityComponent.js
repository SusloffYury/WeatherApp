import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
const itemWidth = (Dimensions.get('window').width);

const ErrorComponent = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/failIcon.png')} />
      </View>
      <Text>No data for {props.enterData}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    margin: 10,
    flex: 1,
  },
  imageContainer: {
    width: itemWidth / 3,
    height: itemWidth / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',

  }
})

export default ErrorComponent;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button
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
      <Text style={styles.largeText}>Data is not available</Text>
      <Text style={styles.smallText}>Cannot determine your current location</Text>
      <Button title ='Get Coordinate'
      color="black"
        style={styles.Button}
        onPress={props.getCoordinate}
      />
      
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
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  Button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  largeText: {
    marginVertical: 15,
  },
  smallText:{
    marginVertical:10,
  }
})
export default ErrorComponent;

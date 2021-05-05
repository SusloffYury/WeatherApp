import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button
} from 'react-native';
import Color from '../../constants/Colors';

import { verifyPermission } from '../../api/getCoordinate';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const itemWidth = (Dimensions.get('window').width - 10);
const itemHeight = (Dimensions.get('window').height - 10);

const AccessDenied = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/failIcon.png')} />
        <View style={styles.containerText}>
          <Text style={styles.largeText}>Data is not available</Text>
          <Text style={styles.smallText}>Cannot determine your current location</Text>
          <Button title='Allow access' color="black"
            style={styles.Button}
            onPress={() => verifyPermission()}
          />
        </View>
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
export default AccessDenied;

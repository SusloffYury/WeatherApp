import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";

const margin = 7;
const itemWidth = (Dimensions.get('window').width)

const SearchingResult = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.data}>
        <View style={styles.cityName}>
          <Text style={styles.cityFont}>{props.cityName}</Text>
        </View>
        <View style={styles.cityTemp}>
          <Text style={styles.tempFont}>{`${props.temperature} C`}</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={props.icon} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    width: itemWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: margin,
  },
  imageContainer: {
    marginVertical: margin + 10,
    width: itemWidth / 5,
    height: itemWidth / 5,
  },
  cityName: {
    marginVertical: 10,
    marginLeft: margin + 3,
  },
  cityTemp: {
    marginLeft: 15
  },
  tempFont: {
    fontSize: 15
  },
  cityFont: {
    fontSize: 20,
    fontWeight: '600'
  }
})
export default SearchingResult;
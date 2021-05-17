import React from 'react';
import { useSelector } from 'react-redux';
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
  const weatherCity = useSelector(state => state.search.searchingCity)
  return (
    <View style={{
      width: itemWidth,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: margin,
      marginLeft:55,
    }}>
      <View style={styles.data}>
        <View style={{
          marginVertical: 10,
          marginLeft: margin ,
        }}>
          <Text style={styles.cityFont}>{weatherCity.cityName}</Text>
        </View>
        <View style={styles.cityTemp}>
          <Text style={styles.tempFont}>{`${weatherCity.temperature} C`}</Text>
        </View>
      </View>
      <View style={{
        marginVertical: margin + 15,
        width: itemWidth / 5,
        height: itemWidth / 5,
      }}>
        <Image
          style={styles.image}
          source={weatherCity.icon} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  data: {
    marginVertical: 15
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

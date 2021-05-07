import React, { useState, useEffect } from 'react';
import {
  Dimensions, Image, StyleSheet, Text, View
} from "react-native";
const margin = 5;
const window = Dimensions.get('window');
let itemWidth;

const HourlyWeather = props => {
  const [dimensions, setDimesions] = useState({ window })
  useEffect(() => {
   const onChange = ({ window }) => {
      setDimesions({ window })
    }
    Dimensions.addEventListener('change', onChange)
    return () => {
      Dimensions.removeEventListener('change', onChange)
    };
  })
  itemWidth = dimensions.window.width;
  return (
    <View style={{
      width: itemWidth,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: margin
    }}>
      <View style={styles.data}>
        <View style={styles.cityName}>
          <Text style={styles.cityFont}>{props.date}</Text>
        </View>
        <View style={styles.cityTemp}>
          <Text style={styles.tempFont}>{`${props.temperature} C`}</Text>
        </View>
      </View>
      <View style={{
        marginHorizontal: margin,
        width: itemWidth / 5.3,
        height: itemWidth / 5,
      }}>
        <Image
          style={styles.image}
          source={props.icon} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cityName: {
    marginVertical: 10,
  },
  cityTemp: {
    marginLeft: 5
  },
  tempFont: {
    fontSize: 15
  },
  cityFont: {
    fontSize: 20,
    fontWeight: '600'
  }
})
export default HourlyWeather;

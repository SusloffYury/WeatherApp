import React, { useEffect, useState } from 'react';
import {
  Dimensions, Image, StyleSheet, Text, View
} from "react-native";
const margin = 5;
const window = Dimensions.get("window");


const DailyWeather = props => {
  const [dimension, setDimesions] = useState({ window });

  useEffect(() => {
    const onChange = ({ window }) => {
      setDimesions({ window })
    }
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange)
    }
  })

  const itemWidth = dimension.window.width;
  return (
    <View style={{
      width: itemWidth - margin * 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: margin,
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
        width: itemWidth / 5,
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
    marginVertical: 15,
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
  },
  image: {
    marginTop: 30,
  }
})
export default DailyWeather;

import moment from 'moment';
import React from 'react';
import {
  Dimensions, Image,
  StyleSheet, Text,
  View
} from 'react-native';
import { useSelector } from 'react-redux';
import Color from '../constants/Colors';
const itemWidth = (Dimensions.get('window').width);
const itemHeight = (Dimensions.get('window').height)

const DetailScreen = props => {
  const Date = moment().format('MMMM, DD')
  const Time = moment().format('h:mm a')
  const name = props.route.params.name;
  const cities = useSelector(state => state.search.defaultCityWeather);
  console.log(`Detail ${cities}`)
  const detailCity = cities
    .filter((item) => {
      console.log(item)
      return item.cityName === name
    })
  return (
    <View style={{
      width: itemWidth,
      height: itemHeight,
      backgroundColor: Color.primary
    }}>
      <View style={styles.container}>
        <Text style={styles.dateText}>{Date}</Text>
        <Text style={styles.dateTime}>{Time}</Text>
        <Image style={{
          width: itemWidth / 3.5,
          height: itemHeight / 8,
        }}
         source={detailCity[0].icon} />
        <Text style={styles.temp}>{`${detailCity[0].temperature} C`}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
    fontSize: 25,
    flex: 0.7
  },
  dateText: {
    fontWeight: '600',
    fontSize: 35
  },
  dateTime: {
    fontWeight: '600',
    fontSize: 25,
    marginVertical: 10,
  },
  temp: {
    fontWeight: '600',
    fontSize: 25,
    marginVertical: 10,
  }

})

export const DetailHeader = (navData) => {
  return {
    headerTitle: navData.route.params.name,
  }
}

export default DetailScreen;

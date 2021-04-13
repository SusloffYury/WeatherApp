import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

const DetailScreen = props => {
  const Date = moment().format('MMMM, DD')
  const Time = moment().format('h:mm a')
  const name = props.route.params.name;
  const cities = useSelector(state => state.search.defaultCityWeather);
  const detailCity = cities
    .filter((item) => {
      return item.cityName === name
    })
   return (
    <View style={styles.screen}>
      <View style ={styles.container}>
      <Text>{Date}</Text>
      <Text>{Time}</Text>
      <Image style={styles.image} source={detailCity[0].icon} />
      <Text>{detailCity[0].temperature}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  screen:{
   flex:1
   },
   container:{
    height:300,
    width:300,
    justifyContent:'center',
    alignItems:'center'
   },
   image:{
     width:100,
     height:100,
     justifyContent:'center',
     alignItems:'center'
   }
})

export const DetailHeader = (navData) => {
  return {
    headerTitle: navData.route.params.name,
  }
}

export default DetailScreen;

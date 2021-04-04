import React, { useEffect, useCallback } from 'react';
import {
  Button,
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DayliWeatherComponent from '../components/dailyWeatherComponent';
import getCoordinate from '../components/getCoordinate';
import Colors from '../constants/Colors';
import * as Actions from '../store/AppActions';

const DailyScreen = props => {
  const dispatch = useDispatch();
  const coordinate = { lat: 52.2604, lon: 30.5831 }
  const WeatherCityDaily = (useSelector(state =>
    state.search.cityDailyWeather))

  useEffect(
    () => {
      dispatch(Actions.GetCity(coordinate))
      dispatch(Actions.FetchingDailyWeather(coordinate))
    }, []
  )

  return (
    <View style={styles.screen}>
      <FlatList data={WeatherCityDaily}
        keyExtractor={item => item.id}
        renderItem={itemData =>
          <DayliWeatherComponent
            date={itemData.item.date}
            temperature={itemData.item.temp}
            icon={itemData.item.icon} />
        } />
    </View >
  )
}
export const NavigateStyle = () => {
  const CityName = (useSelector(state =>
    state.search.cityName))
  return {
    headerTitle: {
      title: CityName
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
    backgroundColor: Colors.primary,
    flex: 1
  },
})
export default DailyScreen;
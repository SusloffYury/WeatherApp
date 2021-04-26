import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView
} from 'react-native';
import HourlyWeatherCity from '../UIComponents/hourlyWeatherComponent';
import Colors from '../../constants/Colors';
import NoDataComponent from '../UIComponents/noDataComponent';
import * as Actions from '../../store/AppActions';
import IsLoadingIndicator from '../UIComponents/isLoadingComponent';
import IsLoading from '../UIComponents/isLoadingComponent';

const HourlyView = props => {
   const dispatch = useDispatch();
  const {
    cityHourlyWeather: hourlyWeather,
    cityName: cityName,
    userCoordinate: coordinate,
    IsLoadingIndicator: IsLoading,
    error: ErrorMessage,
   
  } = useSelector(state => state.search)
   return (
    <SafeAreaView style={styles.safearea}>
      {IsLoading ? (<IsLoadingIndicator />) :
        (ErrorMessage === '400') ?
          (<NoDataComponent />) :
          (<View style={styles.screen}>
             <FlatList data={hourlyWeather}
              keyExtractor={item => item.id}
              refreshing={IsLoading}
              onRefresh={() => dispatch(Actions.FetchingHourlyWeather(coordinate))}
              renderItem={itemData =>
                <HourlyWeatherCity
                  date={itemData.item.date}
                  temperature={itemData.item.temp}
                  icon={itemData.item.icon} />
              } />
          </View >)}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 10,
    backgroundColor: Colors.primary,
    flex: 1
  },
  cityName: {
    marginVertical: 20,
    marginLeft: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cityText: {
    fontSize: 30,
    fontWeight: '600',
  },
  safearea: {
    flex: 1
  }
})

export default HourlyView;

import React from 'react';
import {
  FlatList,
  SafeAreaView, StyleSheet, View
} from 'react-native';
import Config from 'react-native-config/index';
import { useDispatch, useSelector } from 'react-redux';
import { FetchingDailyWeather } from '../../store/AppActions';
import DayliWeatherComponent from '../UIComponents/dailyWeatherComponent';
import IsLoadingIndicator from '../UIComponents/isLoadingComponent';
import NoDataComponent from '../UIComponents/noDataComponent';


const DailyView = props => {
  const{
    cityDailyWeather:WeatherCityDaily,
    cityName:cityName,
    IsLoadingIndicator:IsLoading,
    error:ErrorMessage,
    userCoordinate:coordinate
    }=useSelector(state=>state.search)
  const dispatch = useDispatch();
    return (
    <SafeAreaView style={styles.safearea}>
      {IsLoading ? (<IsLoadingIndicator />) :
        (ErrorMessage === '400')
          ?
          (<NoDataComponent />) :
          (<View style={styles.screen}>
              <FlatList data={WeatherCityDaily}
              keyExtractor={item => item.id}
              refreshing={IsLoading}
              onRefresh={() => dispatch(FetchingDailyWeather(coordinate))}
              renderItem={itemData =>
                <DayliWeatherComponent
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
    backgroundColor: Config.COLOR,
    flex: 1
  },
  cityName: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginLeft:10,
  },
  cityText: {
    fontSize: 30,
    color:Config.Accent
  },
  safearea: {
    flex: 1
  }
})
export default DailyView;

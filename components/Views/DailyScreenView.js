import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import NoDataComponent from '../UIComponents/noDataComponent';
import DayliWeatherComponent from '../UIComponents/dailyWeatherComponent';
import { FetchingDailyWeather } from '../../store/AppActions';
import IsLoadingIndicator from '../UIComponents/isLoadingComponent';
import Colors from '../../constants/Colors';

const DailyView = props => {
  const WeatherCityDaily = (useSelector(state =>
    state.search.cityDailyWeather))
  const cityName = (useSelector(state => state.search.cityName))
  const IsLoading = useSelector(state => state.search.IsLoadingIndicator)
  const ErrorMessage = useSelector(state => state.search.error)
  const coordinate = useSelector(state => state.search.userCoordinate)
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.safearea}>
      {IsLoading ? (<IsLoadingIndicator />) :
        (ErrorMessage === '400')
          ?
          (<NoDataComponent />) :
          (<View style={styles.screen}>
            <View style={styles.cityName}>
              <Text style={styles.cityText}>{cityName}</Text>
            </View>
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
    backgroundColor: Colors.primary,
    flex: 1
  },
  cityName: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  cityText: {
    fontSize: 30,
    fontWeight: '400'
  },
  safearea: {
    flex: 1
  }
})

export default DailyView;

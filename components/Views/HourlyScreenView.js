import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView
} from 'react-native';
import moment from "moment";
import HourlyWeatherCity from '../UIComponents/hourlyWeatherComponent';
import Colors from '../../constants/Colors';
import NoDataComponent from '../UIComponents/noDataComponent';
import { FetchingHourlyWeather } from '../../store/AppActions';
import IsLoadingIndicator from '../UIComponents/isLoadingComponent';
import IsLoading from '../UIComponents/isLoadingComponent';
console.log(IsLoading)
const HourlyView = props => {
  const Date = moment().format('DD. MM. YYYY')
  const hourlyWeather = useSelector(state => state.search.cityHourlyWeather)
  const cityName = (useSelector(state => state.search.cityName))
  const coordinate = useSelector(state => state.search.userCoordinate)
  const IsLoading = useSelector(state => state.search.IsLoadingIndicator)
  const ErrorMessage = useSelector(state => state.search.error)
  const dispatch = useDispatch();
   return (
    <SafeAreaView style={styles.safearea}>
      {IsLoading ? (<IsLoadingIndicator />) :
        (ErrorMessage === '400') ?
          (<NoDataComponent />) :
          (<View style={styles.screen}>
            <View style={styles.cityName}>
              <Text style={styles.cityText}>
                {`${cityName}  -  ${Date}`}</Text>
            </View>
            <FlatList data={hourlyWeather}
              keyExtractor={item => item.id}
              refreshing={IsLoading}
              onRefresh={() => dispatch(FetchingHourlyWeather(coordinate))}
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

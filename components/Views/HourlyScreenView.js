import React from 'react';
import { useSelector } from 'react-redux';
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

const HourlyView = props => {
  const hourlyWeather = useSelector(state => state.search.cityHourlyWeather)
  const cityName = (useSelector(state => state.search.cityName))
  const Date = moment().format('MM, DD do')
  const IsLoading = useSelector(state => state.search.IsLoadingIndicator)
  const ErrorMessage = useSelector(state => state.search.error)
  return (
    <SafeAreaView style={styles.safearea}>
      {IsLoading ? (<IsLoadingIndicator />) :
        (ErrorMessage==='400')?
        (<NoDataComponent/>):
        (<View style={styles.screen}>
          <View style={styles.cityName}>
            <Text style={styles.cityText}>
              {`${cityName}  -  ${Date}`}</Text>
          </View>
          <FlatList data={hourlyWeather}
            keyExtractor={item => item.id}
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

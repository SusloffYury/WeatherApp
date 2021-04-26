import React from 'react';
import {
    FlatList,
    SafeAreaView, StyleSheet, View
} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import * as Actions from '../../store/AppActions';
import HourlyWeatherCity from '../UIComponents/hourlyWeatherComponent';
import IsLoadingIndicator from '../UIComponents/isLoadingComponent';
import NoDataComponent from '../UIComponents/noDataComponent';

const YesterdayHourlyView = props => {
   const {
    cityHourlyWeather: hourlyWeather,
    userCoordinate: coordinate,
    IsLoadingIndicator: IsLoading,
    error: ErrorMessage,
    LoadingFile:file,
  } = useSelector(state => state.search)
  
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.safearea}>
      {IsLoading ? (<IsLoadingIndicator />) :
        (ErrorMessage === '400') ?
          (<NoDataComponent />) :
          (<View style={styles.screen}>
            <FlatList data={file}
              keyExtractor={item => item.id}
              refreshing={IsLoading}
              onRefresh={() => dispatch(Actions.FileSystems(coordinate))}
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

export default YesterdayHourlyView;

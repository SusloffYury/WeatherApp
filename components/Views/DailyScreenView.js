import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import DayliWeatherComponent from '../dailyWeatherComponent';
import Colors from '../../constants/Colors';

const DailyView = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.cityName}>
        <Text>{props.cityName}</Text>
      </View>
      <FlatList data={props.WeatherCityDaily}
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
const styles = StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 10,
    backgroundColor: Colors.primary,
    flex: 1
  },
  cityName: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
})

export default DailyView;
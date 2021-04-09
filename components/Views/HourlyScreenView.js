import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView
} from 'react-native';
import HourlyWeatherCity from '../UIComponents/hourlyWeatherComponent';
import Colors from '../../constants/Colors';

const HourlyView = props => {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.screen}>
        <View style={styles.cityName}>
          <Text>{`${props.cityName}-${props.Date}`}</Text>
        </View>
        <FlatList data={props.hourlyWeather}
          keyExtractor={item => item.id}
          renderItem={itemData =>
            <HourlyWeatherCity
              date={itemData.item.date}
              temperature={itemData.item.temp}
              icon={itemData.item.icon} />
          } />
      </View >
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  safearea: {
    flex: 1
  }

})

export default HourlyView;

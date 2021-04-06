
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import CityWeather from '../defaultCitiesComponent';
import SearchingCityWeather from '../searchingCityComponent';

const MainScreenView = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.inputArea}>
        <View style={styles.inputContainer} >
          <Ionicons
            name={Platform.OS == 'android' ? 'md-search' : 'ios-search'}
            size={20}
            color='#000'
          />
          <TextInput
            style={styles.input}
            placeholder='Enter city here..'
            onChangeText={value => props.setSearchTerm(value)}
            value={props.searchTerm}
          />
          {(props.weatherCity || props.errorMessage === '404') ?
            <TouchableOpacity
              onPress={props.ClearInputNull}>
              <Ionicons
                name={Platform.OS == 'android' ? 'md-close' : 'ios-close'}
                size={20}
                color='#000'
              />
            </TouchableOpacity>
            : null}
        </View>
      </View>
      {(props.errorMessage === '404' || props.weatherCity) ?
        <SearchingCityWeather
          navigation={props.navigation}
          enterData={props.searchTerm}
          error={props.errorMessage}
          cityName={props.weatherCity.cityName}
          temperature={props.weatherCity.temperature}
          icon={props.weatherCity.icon}
        />
        :
        <CityWeather
          data={props.weather}
          navigation={props.navigation} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
    backgroundColor: Colors.primary,
    flex: 1
  },
  inputContainer: {
    width: '85%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    paddingLeft: 10,
    paddingVertical: 5,
    marginTop: 20
  },
  input: {
    flex: 1,
  },

})
export default MainScreenView;

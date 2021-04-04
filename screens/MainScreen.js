import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Button
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import * as Actions from '../store/AppActions'
import { useDispatch, useSelector } from 'react-redux';
import CityWeather from '../components/defaultCitiesComponent';
import { ClearInput, ErrorMessage } from '../store/AppActionCreators';
import SearchingCityWeather from '../components/searchingCityComponent';
import useDebounce from '../components/useDebounce';


const MainScreen = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const DebounceSearchTerm = useDebounce(searchTerm, 500);
  const dispatch = useDispatch();

  useEffect(() => {
    if (DebounceSearchTerm) {
      dispatch(Actions.SearchingCityWeather(DebounceSearchTerm))
    }
  }, [DebounceSearchTerm])

  const weather = useSelector(state => state.search.defaultCityWeather)
  const weatherCity = useSelector(state => state.search.searchingCity)
  const errorMessage = useSelector(state => state.search.error)

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
            onChangeText={value => setSearchTerm(value)}
            value={searchTerm}
          />
          <Button onPress={() => { props.navigation.navigate('DetailCity') }} />
          {(weatherCity || errorMessage === '404') ?
            <TouchableOpacity
              onPress={() => {
                dispatch(ClearInput())
                dispatch(ErrorMessage(''))
                setSearchTerm('')
              }}>
              <Ionicons
                name={Platform.OS == 'android' ? 'md-close' : 'ios-close'}
                size={20}
                color='#000'
              />
            </TouchableOpacity>
            : null}
        </View>
      </View>
      {(errorMessage === '404' || weatherCity) ?
        <SearchingCityWeather
          enterData={searchTerm}
          error={errorMessage}
          cityName={weatherCity.cityName}
          temperature={weatherCity.temperature}
          icon={weatherCity.icon}
        />
        :
        <CityWeather data={weather} navigation ={props.navigation} />
      }
    </View>
  )
}
export const NavigateStyle = () => {
  return {
    headerShown: false
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
export default MainScreen;

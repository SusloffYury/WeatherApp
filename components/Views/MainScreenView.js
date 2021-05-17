
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import {
  Platform,
  SafeAreaView, StyleSheet, TextInput,
  TouchableOpacity, View, Dimensions, Image
} from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import CityWeather from '../UIComponents/defaultCitiesComponent';
import SearchingCityWeather from '../UIComponents/searchingCityComponent';
let itemHeight;
let itemWidth;
const window = Dimensions.get("window");

const MainScreenView = props => {
  const [dimensions, setDimesions] = useState({ window })
  useEffect(() => {
    const onChange = ({ window }) => {
      setDimesions({ window })
    }
    Dimensions.addEventListener('change', onChange)
    return () => {
      Dimensions.removeEventListener('change', onChange)
    };
  })
  itemWidth = dimensions.window.width;
  itemHeight = dimensions.window.height;

  const {
    error: errorMessage,
    searchingCity: weatherCity
  } = useSelector(state => state.search)

  const goToImagePicker = () => {
    props.navigation.navigate('ImagePicker')
  }

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.screen}>
        <View style={styles.inputArea}>
          <View style={styles.inputContainer} >
            <Ionicons
              name={Platform.OS == 'android' ? 'md-search' : 'ios-search'}
              size={20}
              color='#000'
              style={styles.inputLabel}
            />
            <TextInput
              style={styles.input}
              placeholder='Enter city here..'
              onChangeText={value => props.setSearchTerm(value)}
              value={props.searchTerm}
            />
            {(weatherCity || errorMessage === '404') ?
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
        {(errorMessage === '404' || weatherCity) ?
          <SearchingCityWeather
            navigation={props.navigation}
            enterData={props.searchTerm}
          />
          :
          <CityWeather
            data={props.weather}
            navigation={props.navigation}
          />}
        <View style={{
          position: 'absolute',
          left: itemWidth / 2.5,
          top: itemHeight / 1.3,
          zIndex: 3,
        }}>
          <TouchableOpacity style={styles.touch}
            onPress={() => goToImagePicker()}>
            <Image source={require('../../assets/add-photo.png')}
              style={styles.ImageAdd}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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
  inputLabel: {
    marginTop: 5,
    marginRight: 5,
  },
  safearea: {
    flex: 1,
  },
  ImageAdd: {
    width: 50,
    height: 50,

  },
  touch: {
    width: 70,
    height: 70,
  }
})
export default MainScreenView;

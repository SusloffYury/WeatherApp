import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text, FlatList, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import { FetchingUserWeather } from '../store/AppActions'
import { useDispatch, useSelector } from 'react-redux';
import CityWeather
  from '../components/defaultCitiesComponent';

const MainScreen = () => {
 // const dispatch = useDispatch();
//  const weather = useSelector(state => state.search.defaultCityWeather);
  const [isBlur, setIsBlure] = useState(false);
  const [textInput, setTextInput] = useState('');

  const data = [{
    id: 1,
    temp: 12,
    city: 'Gomel'
  },
  {
    id: 2,
    temp: 12,
    city: 'Gomel'
  },
  {
    id: 3,
    temp: 12,
    city: 'Gomel'
  },
  {
    id: 4,
    temp: 12,
    city: 'Gomel'
  },
  {
    id: 44,
    temp: 12,
    city: 'Gomel'
  },
  {
    id: 5,
    temp: 12,
    city: 'Gomel'
  },
  {
    id: 442,
    temp: 12,
    city: 'Gomel'
  },
  {
    id: 51,
    temp: 12,
    city: 'Gomel'
  },
  
  ]

  const HandleInput = text => {
    setTextInput(text);
  }
  if (isBlur) {
    console.log(textInput);
  }
  return (
    <View style={styles.screen}>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder='Enter city here..'
          onChangeText={HandleInput}
          onBlur={() => setIsBlure(true)}
          onFocus={() => setIsBlure(false)}
          value={textInput}
        />
      </View>
              <CityWeather data={data}/>
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
  inputArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 80
  },
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 20,

  },
 
})
export default MainScreen;

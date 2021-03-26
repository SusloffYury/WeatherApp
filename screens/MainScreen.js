import React, { useEffect } from 'react';
import { View, TextInput, StyleSheet, Button, Text } from 'react-native';
import Colors from '../constants/Colors';
import { FetchingWeather } from '../store/AppActions'
import { useDispatch, useSelector } from 'react-redux';

const MainScreen = () => {
    const dispatch = useDispatch();
     const weather = useSelector(state=>state.search.defaultCityWeather);
   console.log(weather.weather)
    return (
        <View style={styles.screen}>
          

            {/* <TextInput
                style={styles.input}
                placeholder='Enter city here..'
                onChange={dispatch((text)=>FetchingWeather(text))}
            /> */}

            <Button title='Send' onPress={() => dispatch(FetchingWeather('London'))} />
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
    input: {
        borderBottomColor: 'black',
        borderWidth: 1,
        marginTop: 44
    }
})
export default MainScreen;
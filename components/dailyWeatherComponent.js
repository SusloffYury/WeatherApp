import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions
} from "react-native";
import ErrorComponent from './errorCityComponent';

const margin = 5;
const itemWidth = (Dimensions.get('window').width)

const DailyWeather = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.data}>
                <View style={styles.cityName}>
                    <Text style={styles.cityFont}>{props.date}</Text>
                </View>
                <View style={styles.cityTemp}>
                    <Text style={styles.tempFont}>{`${props.temperature} C`}</Text>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={props.icon} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: itemWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: margin,
    },
    imageContainer: {
        marginHorizontal: margin,
        width: itemWidth / 5,
        height: itemWidth / 5,
    },
    cityName: {
        marginVertical: 10,
    },
    cityTemp: {
        marginLeft: 5
    },
    tempFont: {
        fontSize: 15
    },
    cityFont: {
        fontSize: 20,
        fontWeight: '600'
    }


})
export default DailyWeather;
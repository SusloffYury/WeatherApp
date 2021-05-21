import moment from "moment";
import { type } from "os";
import formatTemp from "../components/FunctionalComponents/formatTemp";
import WeatherIcons from "../models/Weather";

import {
	CITY_NAME,
	CLEAR_INPUT,
	DAILY_WEATHER,
	ERROR_MESSAGE,
	HOURLY_WEATHER,
	IS_LOADING_INDICATOR,
	SEARCHING_CITY_WEATHER,
	USER_CITY,
	USER_COORDINATE,
	LOADING_FILE,
	SAVE_PHOTO,
	IS_CONNECTION,
} from "./ActionConst";
import * as ActionCreators from "./AppActionCreators";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

type ActionCreatorsTypes = ReturnType<InferValueTypes<typeof ActionCreators>>;

export type DefaultCity = {
	id: number;
	cityName: string;
	temperature: string | number;
	icon: object;
};

export type InitialeStateType = typeof initialState;

const initialState = {
	defaultCityWeather: null as DefaultCity | null,
	searchingCity: null as DefaultCity | null,
	cityDailyWeather: null as DefaultCity | null,
	cityHourlyWeather: null as DefaultCity | null,
	userCoordinate: null as object | null,
	error: null as string | null,
	cityName: null as string | null,
	IsLoadingIndicator: false,
	LoadingFile: null as DefaultCity | null,
	savePhotos: null,
	isConnected: false,
};

export default (
	state = initialState,
	action: ActionCreatorsTypes
): InitialeStateType => {
	switch (action.type) {
		case USER_CITY: {
			const defaultCity: DefaultCity = action.weather.list
				.map((el, index: number) => {
					return {
						id: index * 10,
						cityName: el.name,
						temperature: formatTemp(el.main.temp),
						icon: WeatherIcons[el.weather[0].main],
					};
				})
				.slice(0, 8);
			return {
				...state,
				defaultCityWeather: defaultCity,
			};
		}
		case SEARCHING_CITY_WEATHER: {
			const weatherCity: DefaultCity = {
				id: Math.random() * 20,
				temperature: formatTemp(action.weather.main.temp),
				cityName: action.weather.name,
				icon: WeatherIcons[action.weather.weather[0].main],
			};
			return {
				...state,
				searchingCity: weatherCity,
			};
		}
		case CLEAR_INPUT: {
			return {
				...state,
				searchingCity: action.weather,
			};
		}
		case ERROR_MESSAGE: {
			return {
				...state,
				error: action.message,
			};
		}
		case IS_LOADING_INDICATOR: {
			return {
				...state,
				IsLoadingIndicator: action.indication,
			};
		}

		case DAILY_WEATHER: {
			const DailyData: DefaultCity = action.weather.daily.map((item, index) => {
				return {
					id: index * 5 + 2,
					temp: formatTemp(item.temp.day),
					icon: WeatherIcons[item.weather[0].main],
					date: moment().add(index, "days").format("MMM Do"),
				};
			});
			return {
				...state,
				cityDailyWeather: DailyData,
			};
		}
		case HOURLY_WEATHER: {
			const HourlyData: DefaultCity = action.weather.hourly.map(
				(item, index) => {
					return {
						id: index * 51 + 1,
						icon: WeatherIcons[item.weather[0].main],
						temp: formatTemp(item.temp),
						date: moment().add(index, "hour").format("HH:00 Do"),
					};
				}
			);

			return {
				...state,
				cityHourlyWeather: HourlyData,
			};
		}
		case USER_COORDINATE: {
			return {
				...state,
				userCoordinate: action.userCoordinate,
			};
		}
		case CITY_NAME: {
			return {
				...state,
				cityName: action.cityName,
			};
		}
		case LOADING_FILE: {
			const YesterDayData: DefaultCity = action.fileName.data.hourly.map(
				(item, index) => {
					return {
						id: index + 100,
						icon: WeatherIcons[item.weather[0].main],
						temp: formatTemp(item.temp),
						date: moment()
							.subtract(1, "day")
							.add(index, "hour")
							.format("HH:00 Do"),
					};
				}
			);

			return {
				...state,
				LoadingFile: YesterDayData,
			};
		}
		case SAVE_PHOTO: {
			return {
				...state,
				savePhotos: action.uriPhoto,
			};
		}

		default:
			return state;
	}
};

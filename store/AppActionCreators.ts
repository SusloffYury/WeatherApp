import { type } from "os";
import { DefaultCity } from "./AppReducer";
import * as Actions from "./ActionConst";
export const ClearInput = () =>
	<const>{
		type: typeof Actions.CLEAR_INPUT,
		weather: "",
	};

export const LoadingFile = (file: object) =>
	<const>{
		type: typeof Actions.LOADING_FILE,
		fileName: file,
	};

export const IsLoadingIndicator = (indication: boolean) =>
	<const>{
		type: typeof Actions.IS_LOADING_INDICATOR,
		indication: indication,
	};

export const ErrorMessage = (error: string) =>
	<const>{
		type: typeof Actions.ERROR_MESSAGE,
		message: error,
	};

export const GetCityName = (city: string) =>
	<const>{
		type: typeof Actions.CITY_NAME,
		cityName: city,
	};

export const UserWeatherCity = (weatherParams) =>
	<const>{
		type: typeof Actions.USER_CITY,
		weather: weatherParams,
	};

export const SearchingCity = (weatherParams: DefaultCity) =>
	<const>{
		type: typeof Actions.SEARCHING_CITY_WEATHER,
		weather: weatherParams,
	};

export const DailyWeatherCity = (weatherParams: DefaultCity) =>
	<const>{
		type: typeof Actions.DAILY_WEATHER,
		weather: weatherParams,
	};

export const HourlyWeatherCity = (weatherParams: DefaultCity) =>
	<const>{
		type: typeof Actions.HOURLY_WEATHER,
		weather: weatherParams,
	};
export const SetUserCoordinate = (coordinate: object) =>
	<const>{
		type: typeof Actions.USER_COORDINATE,
		userCoordinate: coordinate,
	};
export const SavePhoto = (uri: string) =>
	<const>{
		type: typeof Actions.SAVE_PHOTO,
		uriPhoto: uri,
	};
export const Gallery = (uri: string) =>
	<const>{
		type: typeof Actions.SAVE_PHOTO,
		uriPhoto: uri,
	};

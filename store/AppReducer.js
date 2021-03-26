import {DEFAULT_CITY} from './AppActions';



const initialState = {
defaultCityWeather:'',

}

export default (state = initialState, action) => {
    switch (action.type) {
           case DEFAULT_CITY: {
          return{
              ...state,
              defaultCityWeather: action.weather
          }
        }
        
        default: return state;
    }
}


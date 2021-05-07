import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { SplashScreenLoader } from './components/FunctionalComponents/SplashScreenLoader';
import SearchReducer from './store/AppReducer';
import { Notifications } from 'react-native-notifications';
import thunk from 'redux-thunk';



const rootReducer = combineReducers({
  search: SearchReducer
})
const store = createStore(
  rootReducer, applyMiddleware(thunk)
)

export default function App() {
  Notifications.registerRemoteNotifications();
  Notifications.events().registerNotificationReceivedForeground((notification, completion) => {
    console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);
    completion({ alert: false, sound: false, badge: false });
  });

  Notifications.events().registerNotificationOpened((notification, completion) => {
    console.log(`Notification opened: ${notification.payload}`);
    completion();
  });
  // Notifications.events().registerRemoteNotificationsRegistered((event) => {
  //   // TODO: Send the token to my server so it could send back push notifications...
  //   console.log("Device Token Received", event.deviceToken);
  // });
  Notifications.events().registerRemoteNotificationsRegistrationFailed((event) => {
    console.error(event);
  });

  return (
    <Provider store={store}>
      <SplashScreenLoader />
    </Provider>

  );
}

/**
 * @format
 */
import React from 'react';
import { Provider } from 'react-redux';
import configuredStore from './src/Redux/Store/store';
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

const store = configuredStore()
const reduceComponent = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => reduceComponent);

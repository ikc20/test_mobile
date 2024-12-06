/**
 * @format
 */
import 'react-native-gesture-handler'; // Doit être importé avant tout
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-reanimated'; // Placez-le après 'react-native-gesture-handler'

AppRegistry.registerComponent(appName, () => App);

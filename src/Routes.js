import {
  createAppContainer,
} from 'react-navigation';

import firstScreen from './Screens/firstScreen/firstScreen';
import secondScreen from './Screens/secondScreen/secondScreen';

import { createStackNavigator } from 'react-navigation-stack';


const AppStackNavigator = createStackNavigator(
  {
    firstScreen: { screen: firstScreen },
    secondScreen: { screen: secondScreen },
  },
  {
    initialRouteName: 'firstScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(AppStackNavigator);
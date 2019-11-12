import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/modules/views/Home';
import SecondScreen from './src/modules/views/SecondScreen';
// import List from './src/screens/List';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#623CEA',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontFamily: 'SpaceGrotesk-Regular',
      },
    },
  },
  SecondScreen: {
    screen: SecondScreen,
    navigationOptions: {
      title: 'Test',
      headerStyle: {
        backgroundColor: '#623CEA',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontFamily: 'SpaceGrotesk-Regular',
      },
    },
  },

  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

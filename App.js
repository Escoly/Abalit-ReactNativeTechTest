import React from 'react';
import { StyleSheet, Text, View, Button, Icon, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons'
//Components
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Profile from './components/Profile'
import Search from './components/Search'
import Publish from './components/Publish'
import Notifications from './components/Notifications'
import Modal from './components/Modal'


const homeStack = createStackNavigator({
  Home:Home
})

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: homeStack,
    navigationOptions:{
      tabBarIcon: ({tintColor})=>(
        <Ionicons name="md-home" color={tintColor} size={25}/>
      )
    }
  },
  Search: {
    screen: Search,
    navigationOptions:{
      tabBarIcon: ({tintColor})=>(
        <Ionicons name="md-search" color={tintColor} size={25}/>
      )
    }
  },
  Publish: {
    screen: Publish,
    navigationOptions:{
      tabBarIcon: ({tintColor})=>(
        <Ionicons name="md-camera" color={tintColor} size={25}/>
      )
    }
  },
  Notifications: {
    screen: Notifications,
    navigationOptions:{
      tabBarIcon: ({tintColor})=>(
        <Ionicons name="md-notifications" color={tintColor} size={25}/>
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions:{
      tabBarIcon: ({tintColor})=>(
        <Ionicons name="md-person" color={tintColor} size={25}/>
      )
    }
  }
},
  {
    tabBarOptions: {
      activeTintColor: '#00BDD3',
      inactiveTintColor: 'gray',
    }
  }
)

const MainStack = createStackNavigator(
  {
    Register: {
      screen: Register
    },
    Login: {
      screen: Login
    },
    TabNavigator: {
      screen: TabNavigator
    }
  },
  {
    initialRouteName: 'Login'
  })


const RootStack = createStackNavigator({
  Main: {
    screen: MainStack,
    navigationOptions:{
      headerVisible:false,
    }
  },
  Modal: {
    screen: Modal,
  }
},
  {
    mode: 'modal',
    headerMode: 'none',
    
  })


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
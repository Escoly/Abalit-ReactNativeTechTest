import React from 'react';
import { StyleSheet, Text, View, Button, Icon, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'
//Components
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Profile from './components/Profile'
import Search from './components/Search'
import Publish from './components/Publish'
import Notifications from './components/Notifications'
import Comments from './components/Comments'
import EditProfile from './components/EditProfile'
import Settings from './components/Settings'
import CreatePost from './components/CreatePost'

import Modal from './components/Modal'


const homeStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Comments: {
    screen: Comments
  }
})

const searchStack = createStackNavigator({
  Search: Search
})

const publishStack = createStackNavigator({
  Publish: Publish,
  CreatePost: CreatePost
})

const notificationsStack = createStackNavigator({
  Notifications: Notifications
})

const profileStack = createStackNavigator({
  Profile: Profile,
  EditProfile: EditProfile,
  Settings: Settings
})

const TabNavigator = createBottomTabNavigator({
  Inicio: {
    screen: homeStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-home" color={tintColor} size={25} />
      )
    }
  },
  Buscar: {
    screen: searchStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-search" color={tintColor} size={25} />
      )
    }
  },
  Publicar: {
    screen: publishStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-camera" color={tintColor} size={25} />
      )
    }
  },
  Notificaciones: {
    screen: notificationsStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-notifications" color={tintColor} size={25} />
      )
    }
  },
  Perfil: {
    screen: profileStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-person" color={tintColor} size={25} />
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

const MainStack = createStackNavigator({
  Register: {
    screen: Register,
    navigationOptions: {
      headerVisible: false,
    }
  },
  Login: {
    screen: Login
  },
  TabNavigator: {
    screen: TabNavigator
  }
}, {
  initialRouteName: 'Login',
  headerMode: 'none',

})


const RootStack = createStackNavigator({
  Main: {
    screen: MainStack,
    navigationOptions: {
      headerVisible: false,
    }
  },
  Modal: {
    screen: Modal,
  }
}, {
  mode: 'modal',
  headerMode: 'none',

})


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
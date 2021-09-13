import React from 'react';
import Icon from 'react-native-vector-icons/Feather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import { Home } from '../screens/Home';
import { AppStackRoutes } from './stack.routes';
import { Post } from '../screens/Post';
import Profile from '../screens/profile'

import theme from '../global/styles/theme';

const AppRoutes: React.FC = () => (
  <>
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: theme.colors.primaryDark,
        borderTopColor: 'transparent'
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: theme.colors.text,
      tabBarInactiveTintColor: theme.colors.primary
    }}
    >
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarIcon: (({ size, color }) => (
          <Icon
            name="home"
            size={size}
            color={color}
          />
        ))
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarIcon: (({ size, color }) => (
          <Icon
            name="user"
            size={size}
            color={color}
          />
        ))
        }}
      />
      <Tab.Screen
        name="PostDetails"
        component={Post}
      />
    </Tab.Navigator>
  </>
)

export default AppRoutes;

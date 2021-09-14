import React from 'react';
import Icon from 'react-native-vector-icons/Feather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

import { Home } from '../screens/Home';
import { Post } from '../screens/Post';
import { AppStackRoutes } from '../routes/stack.routes'
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
      <Tab.Screen name="AppStack" component={AppStackRoutes}
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
    </Tab.Navigator>
  </>
)

export default AppRoutes;

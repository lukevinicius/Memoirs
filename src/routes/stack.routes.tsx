import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Post } from '../screens/Post';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes(){
  return(
    <Navigator>
      <Screen
        name="PostDetails"
        component={Post}
      />
    </Navigator>
  )
}

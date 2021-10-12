import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';

const { Navigator, Screen } = createStackNavigator();

import theme from '../global/styles/theme';
import { Text } from '../screens/Home/styles';
import { Button } from '../screens/AddPost/styles';

import { Post } from '../screens/Post';
import { AddPost } from '../screens/AddPost';
import { UpdatePost } from '../screens/UpdatePost';
import { Home } from '../screens/Home';
import { ConfirmEmail } from '../screens/ConfirmEmail';


export function AppStackRoutes(){
  const navigation =  useNavigation()
  return(
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primaryDark
        },
        headerTintColor: '#fff',
      }}
    >
      <Screen
        name="Home"
        options={{
          headerShown: false,
          headerTitle: '',
        }}
        component={Home}
      />
      <Screen
        name="PostDetails"
        component={Post}
        options={{
          headerTitle: '',
        }}
      />
      <Screen
        name="ConfirmEmail"
        component={ConfirmEmail}
        options={{
          headerTitle: 'Verificação de Email',
        }}
      />
      <Screen
        name="AddPost"
        component={AddPost}
        options={{
          headerTitle: 'Adicionar Post',
          /* headerLeft: () => (
            <Button
              onPress={() => { navigation.navigate('Home') }}
            >
              <Text>Voltar</Text>
            </Button>
          ), */
        }}
      />
      <Screen
        name="UpdatePost"
        component={UpdatePost}
        options={{
          headerTitle: 'Edição de Memoria',
          /* headerLeft: () => (
            <Button
              onPress={() => { navigation.navigate('Home') }}
            >
              <Text>Voltar</Text>
            </Button>
          ), */
        }}
      />
    </Navigator>
  )
}

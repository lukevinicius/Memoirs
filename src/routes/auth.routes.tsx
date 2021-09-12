import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { Splash } from '../screens/splash';
import SignIn from '../screens/SignIn/Index';
import SignUp from '../screens/SingUp/Index';

const AuthRoutes: React.FC = () => (
  <>
  <Navigator initialRouteName="Splash" screenOptions={
    { headerShown: false }
  }>
      <Screen
        name="Splash"
        component={Splash}
      />
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="SignUp"
        component={SignUp}
      />
    </Navigator>
  </>
);

export default AuthRoutes;

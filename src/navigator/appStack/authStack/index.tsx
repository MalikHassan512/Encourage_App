import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  WelcomeScreen,
  SignUpScreen,
  AccountSetup,
  Login,
} from '../../../screens/authFlow';
const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;

export interface AuthStackProps {
  WelcomeScreen: any;
  SignUpScreen: any;
  AccountSetup: any;
  Login?: any;
  navigate?: any;
}

const AuthStack: React.FC<AuthStackProps> = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Screen name="SignUpScreen" component={SignUpScreen} />
      <Screen name="AccountSetup" component={AccountSetup} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};

export default AuthStack;

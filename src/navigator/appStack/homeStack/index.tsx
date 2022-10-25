import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../../screens/homeFlow';

const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;

export interface HomeStacksProps {
  Home?: any;
  navigate?: any;
}

const HomeStack: React.FC<HomeStacksProps> = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default HomeStack;

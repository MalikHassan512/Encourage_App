import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from '../appStack/authStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from '../appStack/homeStack';
import AppDrawer from '../appDrawer';

export interface AppNavigatorProps {
  navigation: any;
  AuthStack: undefined;
  HomeStack?: any;
}
const Stack = createNativeStackNavigator();
const AppNavigator: React.FC<AppNavigatorProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="AppDrawer" component={AppDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

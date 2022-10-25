import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from '../appStack/homeStack';
import {CustomDrawer} from '../../components';

const Drawer = createDrawerNavigator();
const {Navigator, Screen} = Drawer;

export interface AppDrawerProps {
  navigation: any;
  HomeStack?: any;
  CustomDrawer?: any;
}

const AppDrawer: React.FC<AppDrawerProps> = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerType: 'front',
        drawerStyle: {
          width: '100%',
          height: '100%',
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Screen
        name="HomeSt"
        component={HomeStack}
        options={{
          drawerLabel: 'Home',
        }}
      />
    </Navigator>
  );
};

export default AppDrawer;

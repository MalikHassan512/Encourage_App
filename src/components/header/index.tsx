import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../constants/Diemensions';
import {useNavigation, DrawerActions} from '@react-navigation/native';

export interface HeaderProps {
  isDrawer?: boolean;
}
const Header: React.FC<HeaderProps> = ({isDrawer}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.imageAndIconContainer}>
        <Image
          source={require('../../assets/images/profile_pic.png')}
          style={styles.profileImage}
        />
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          {isDrawer ? (
            <Image
              source={require('../../assets/images/drawerIcon2.png')}
              style={styles.drawerIcon}
            />
          ) : (
            <Image
              source={require('../../assets/images/drawerIcon.png')}
              style={styles.drawerIcon}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageAndIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('4%'),
    alignItems: 'center',
    marginHorizontal: wp('5%'),
  },

  profileImage: {width: 40, height: 40},
  drawerIcon: {width: 27, height: 20, padding: 10},
});

export default Header;

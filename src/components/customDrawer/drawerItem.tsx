import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import {
  //   heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../constants/Diemensions';

interface DrawerItemProps {
  title: string;
  icon: any;
  isActive?: boolean;
  onPress?: any;
  isModalOpen?: boolean;
}
const DrawerItem: React.FC<DrawerItemProps> = ({
  title,
  icon,
  isActive,
  onPress,
  isModalOpen,
}) => {
  return (
    <View style={[styles.container, isModalOpen && styles.isModalOpenCon]}>
      <View style={[styles.IconAndTextCon]}>
        <Image source={icon} style={styles.Icon} />
        <Text
          style={[styles.titleText, isActive && {color: Colors.White.default}]}>
          {title}
        </Text>
      </View>

      <TouchableOpacity onPress={onPress}>
        {/* {isModalOpen && (
          <Image
            source={require('../../assets/images/active-UpArrow.png')}
            style={styles.upArrow}
            resizeMode="contain"
          />
        )} */}
        {isActive ? (
          <Image
            source={require('../../assets/images/active-UpArrow.png')}
            style={styles.upArrow}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require('../../assets/images/navigation-Sign.png')}
            style={styles.navigateIcon}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('6%'),

    alignItems: 'center',
    flex: 1,
  },
  isModalOpenCon: {alignItems: 'flex-start'},
  Icon: {width: 20, height: 20, marginTop: 5, padding: 10},
  navigateIcon: {width: 10, height: 18},
  IconAndTextCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {marginLeft: 10, fontSize: 25, color: Colors.Black.default},
  upArrow: {
    width: 15,
    height: 25,
    padding: 10,
    tintColor: Colors.White.default,
  },
});

export default DrawerItem;

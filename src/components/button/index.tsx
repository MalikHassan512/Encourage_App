import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../constants/Diemensions';

interface ButtonProps {
  title: string;
  onPress?: any;
  isHome?: boolean;
}
const Button: React.FC<ButtonProps> = ({title, onPress, isHome}) => {
  return (
    <TouchableOpacity
      style={[styles.container, isHome && styles.isHome]}
      onPress={onPress}>
      <Text style={[styles.btnTxt, isHome && styles.isHomeText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    // height: 70,
    height: hp(9),
    // width: width - 40,
    width: wp(88),
    backgroundColor: Colors.ButtonBasicColor.default,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: Colors.White.default,
    fontFamily: Fonts.Raleway.SemiBold,
    fontSize: 20,
  },
  isHome: {
    // width: 220,
    width: wp(56),
    // height: 65,
    height: hp(8.5),
    backgroundColor: Colors.ButtonBasicColor.default,
  },
  isHomeText: {
    fontSize: 27,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default Button;

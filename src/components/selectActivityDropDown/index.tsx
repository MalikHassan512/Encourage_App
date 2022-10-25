import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../constants/Diemensions';
import Fonts from '../../constants/Fonts';
import Strings from '../../constants/Strings';

const SelectActivityDropDown = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.innerCon}>
        <Text style={styles.text}>{Strings.SelectActivity}</Text>
        <Image
          source={require('../../assets/images/dropDownIcon.png')}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(7),
    justifyContent: 'center',
    marginHorizontal: wp(5),
    height: hp(9),
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  innerCon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.Raleway.Medium,
    fontSize: 18,
    color: 'black',
  },
  imageStyle: {width: 20, height: 18, marginTop: 8},
});

export default SelectActivityDropDown;

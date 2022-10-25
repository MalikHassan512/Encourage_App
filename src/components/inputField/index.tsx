import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import Colors from '../../constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../constants/Diemensions';

const width = Dimensions.get('window').width;

interface InputFieldProps {
  placeholder: string;
  onPress?: any;
  source?: any;
  keyboardType: any;
  buttonSign?: boolean;
  counter?: number;
  isDisabled?: boolean;
  isWhite?: boolean;
  value?: any;
  onChangeText?: any;
  limit?: number;
  bio?: boolean;
  isCross?: any;
  showError?: boolean;
}
const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  onPress,
  source,
  keyboardType,
  buttonSign,
  counter,
  isDisabled,
  isWhite,
  value,
  onChangeText,
  limit,
  bio,
  // isCross,
  showError,
}) => {
  return (
    <View style={[styles.container, bio && styles.bioStyle]}>
      <TextInput
        multiline={true}
        maxLength={limit}
        placeholder={placeholder}
        placeholderTextColor={Colors.PlaceholerText.default}
        style={styles.innerStyle}
        keyboardType={keyboardType}
        blurOnSubmit={true}
        value={value}
        onChangeText={onChangeText}
      />

      {buttonSign && (
        <View style={[styles.blackContainer, isWhite && styles.transBG]}>
          <TouchableOpacity onPress={onPress} disabled={isDisabled}>
            {source ? (
              <Image
                source={source}
                style={[
                  styles.imageStyle,
                  isWhite && styles.white,
                  showError && styles.isCross,
                ]}
              />
            ) : (
              <Text style={styles.counterText}>{counter}</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 15,
    // justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: Colors.White.default,
    borderColor: Colors.Black.default,
    borderWidth: 2,
    height: hp(9),
    // height: 70,
    // width: width - 40,
    width: wp(88),
  },
  // cross: {width: 16, height: 16},
  bioStyle: {height: hp(13), alignItems: 'flex-start'},
  transBG: {backgroundColor: 'transparent'},
  white: {width: 20, height: 20},
  innerStyle: {fontSize: 20, marginLeft: 20, width: width / 1.5},
  blackContainer: {
    backgroundColor: Colors.Black.default,
    width: 60,
    marginTop: -1,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {width: 30, height: 26},
  counterText: {color: Colors.White.default, fontSize: 20, opacity: 0.8},

  isCross: {
    width: 21,
    height: 21,
  },
});

export default InputField;

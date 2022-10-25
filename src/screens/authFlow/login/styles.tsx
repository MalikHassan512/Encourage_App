import {StyleSheet} from 'react-native';
import Fonts from '../../../constants/Fonts';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({
  bg: {width: '100%', height: '100%'},
  logInContainer: {
    alignSelf: 'flex-end',
    marginTop: 80,
    marginRight: 25,
  },
  logInText: {fontSize: 16, color: Colors.Red.default, fontWeight: 'bold'},
  underline: {
    backgroundColor: Colors.Orange.underLine,
    height: 2,
  },
  signUpContainer: {marginTop: 50, alignSelf: 'center'},
  signUpTxt: {
    fontFamily: Fonts.Raleway.Bold,
    fontSize: 20,
    color: Colors.Black.SignUpText,
  },
  inputContainer: {marginTop: 35},
  codeFild: {marginTop: 10},
  btnView: {marginTop: 10},

  errorMsgContainer: {
    marginTop: 20,
    marginLeft: 30,
  },
  errorMsgText: {
    color: Colors.Red.default,
    fontSize: 16,
  },
});

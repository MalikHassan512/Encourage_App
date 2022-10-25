import React from 'react';
import {Text, ImageBackground, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {InputField} from '../../../components';
import Button from '../../../components/button';
import Strings from '../../../constants/Strings';
import useState from 'react-usestateref';
import styles from './styles';
import {AuthStackProps} from '../../../navigator/appStack/authStack';

const Signup = () => {
  const navigation = useNavigation<AuthStackProps>();
  const [sendNo, setSendNo] = useState<boolean>(false);
  const [counter, setCounter, counterRef] = useState<number>(10);
  const [phoneNumber, setPhoneNumber] = useState<any>('');
  const [showError, setShowError] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');

  const checkNo = () => {
    if (phoneNumber.length === 11) {
      setSendNo(true);
      onEnter();
    } else {
      setShowError(!showError);
    }
  };
  console.log('counter', counter);

  const startTimer = () => {
    console.log('counter value is: ', counterRef.current);

    setTimeout(() => {
      setCounter(counterRef.current - 1);
      if (counterRef.current > 0) {
        startTimer();
      }
    }, 1000);
  };

  const onEnter = () => {
    // setSendNo(!sendNo);
    startTimer();
  };

  const onReload = () => {
    setCounter(10);
    startTimer();
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/signup-Bg.png')}
      style={styles.bg}>
      <View style={styles.logInContainer}>
        <Text style={styles.logInText}>{Strings.LOGIN}</Text>
        <View style={styles.underline} />
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpTxt}>{Strings.SIGNUPVIASMSVERIFICATION}</Text>
      </View>
      {sendNo ? (
        <View style={styles.inputContainer}>
          {counterRef.current === 0 ? (
            <InputField
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              buttonSign
              placeholder={Strings.PhoneNumber}
              source={require('../../../assets/images/resend.png')}
              keyboardType="phone-pad"
              onPress={onReload}
            />
          ) : (
            <InputField
              isDisabled={true}
              counter={counterRef.current}
              buttonSign
              placeholder={Strings.PhoneNumber}
              keyboardType="phone-pad"
              onPress={() => setSendNo(true)}
            />
          )}
          <View style={styles.codeFild}>
            <InputField
              limit={6}
              placeholder="Enter Code"
              keyboardType="phone-pad"
              buttonSign
              isWhite
              value={code}
              onChangeText={setCode}
              source={
                code.length > 0 && code.length < 6
                  ? require('../../../assets/images/alert.png')
                  : null
              }
            />
          </View>

          <View style={styles.btnView}>
            <Button
              title="Verify"
              onPress={() => navigation.navigate('AccountSetup')}
            />
          </View>
        </View>
      ) : (
        <View style={styles.inputContainer}>
          <InputField
            isCross
            showError={showError}
            limit={11}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            buttonSign
            placeholder={Strings.PhoneNumber}
            source={
              showError
                ? require('../../../assets/images/cross.png')
                : require('../../../assets/images/send.png')
            }
            keyboardType="phone-pad"
            onPress={() => {
              checkNo();
              // onEnter();
            }}
          />
          {showError && (
            <View style={styles.errorMsgContainer}>
              <Text style={styles.errorMsgText}>
                {Strings.Numberisalreadyinuse}
              </Text>
              <Text style={styles.errorMsgText}>
                {Strings.Logintoyouraccountinstead}
              </Text>
            </View>
          )}
        </View>
      )}
    </ImageBackground>
  );
};

export default Signup;

import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import {BlackButton} from '../../../components';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {AuthStackProps} from '../../../navigator/appStack/authStack';
import Strings from '../../../constants/Strings';

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthStackProps>();
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/images/welcomeScreen-Bg.png')}
          style={styles.image}>
          <View style={styles.btnContainer}>
            <BlackButton
              title="Sign up"
              onPress={() => navigation.navigate('SignUpScreen')}
            />
            <BlackButton
              title="Log in"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </ImageBackground>

        <View style={styles.titleText}>
          <Text style={styles.mainTitleText}>{Strings.ENCOU}</Text>
        </View>
      </View>

      <View style={styles.appContainer}>
        <Text style={styles.appText}>{Strings.APP}</Text>
      </View>
    </>
  );
};

export default WelcomeScreen;

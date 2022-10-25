import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {InputField} from '../../../components';
import Button from '../../../components/button';
import Strings from '../../../constants/Strings';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {HomeStacksProps} from '../../../navigator/appStack/homeStack';

const AccountSetup = () => {
  const navigation = useNavigation<HomeStacksProps>();
  const [switchState, setSwitchState] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{Strings.JUSTAFEWMORETHINGS}</Text>
          <Text style={styles.headingText}>{Strings.ANDYOUREALLSETUP}</Text>
        </View>

        <View style={styles.nameField}>
          <InputField placeholder="Display Name" keyboardType={'default'} />
        </View>

        <View style={styles.margin}>
          <InputField placeholder="Bio" keyboardType={'default'} bio />
        </View>

        <View style={styles.margin}>
          <InputField placeholder="Location" keyboardType={'default'} />
        </View>

        <View style={styles.switchContainer}>
          <TouchableOpacity onPress={() => setSwitchState(!switchState)}>
            {switchState ? (
              <Image
                source={require('../../../assets/images/switchOn.png')}
                style={styles.switchImageSize}
              />
            ) : (
              <Image
                source={require('../../../assets/images/switchOff.png')}
                style={styles.switchImageSize}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.locationText}>
            {Strings.Showlocationonprofile}
          </Text>
        </View>

        <View>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('AppDrawer')}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AccountSetup;

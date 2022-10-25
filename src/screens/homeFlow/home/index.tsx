import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Strings from '../../../constants/Strings';
import {SelectActivityDropDown, IconText, Header} from '../../../components';
import Button from '../../../components/button';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.helloUserView}>
        <Text style={styles.helloUserText}>{Strings.HelloJohn}</Text>
      </View>

      <View style={styles.statusBoxView}>
        <Text style={styles.dayNdateText}>{Strings.Thu}</Text>
        <Text style={styles.dayNdateText}>{Strings.March}</Text>

        <View style={styles.activityStatus}>
          <Text style={styles.activityStatusText}>
            {Strings.Youhavenotloggedanactivitytoday}
          </Text>
        </View>
      </View>

      <View style={styles.dropDownCon}>
        <SelectActivityDropDown />
      </View>

      <View style={styles.iconsCon}>
        <IconText
          icon={require('../../../assets/images/audio.png')}
          text="Audio"
        />

        <IconText
          isVideo
          icon={require('../../../assets/images/video.png')}
          text="Video"
        />

        <IconText icon={require('../../../assets/images/gps.png')} text="GPS" />
      </View>

      <View style={styles.btnCon}>
        <Button title="ACTIVATE" isHome />
      </View>
    </View>
  );
};

export default Home;

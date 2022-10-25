import React, {useState} from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import Colors from '../../constants/Colors';
import Header from '../header';
import DrawerItem from './drawerItem';
import {heightPercentageToDP as hp} from '../../constants/Diemensions';
import ActiveNowModal from '../activeNowModal';

const CustomDrawer = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {} = props;
  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} transparent={true}>
        <ActiveNowModal showModal={() => setModalVisible(false)} />
      </Modal>

      <Header isDrawer />
      <DrawerItem
        title="Activate"
        icon={require('../../assets/images/activate-Icon.png')}
      />

      <DrawerItem
        title="Activity"
        icon={require('../../assets/images/activity-Icon.png')}
      />

      <DrawerItem
        title="Leaderboard"
        icon={require('../../assets/images/leaderBoard-Icon.png')}
      />

      <DrawerItem
        title="Shop"
        icon={require('../../assets/images/shop-Icon.png')}
      />

      <DrawerItem
        title="Setting"
        icon={require('../../assets/images/settings-Icon.png')}
      />

      <View style={styles.activeNowCon}>
        <DrawerItem
          onPress={() => setModalVisible(!modalVisible)}
          isActive
          title="Active Now"
          icon={require('../../assets/images/active-Dot.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White.default,
  },
  activeNowCon: {
    // height: 140,
    height: hp(18),
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
  },
});

export default CustomDrawer;

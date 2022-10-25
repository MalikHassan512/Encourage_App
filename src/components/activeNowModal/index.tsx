import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../constants/Colors';
import DrawerItem from '../customDrawer/drawerItem';

interface ActiveNowModalProps {
  showModal?: any;
}

const ActiveNowModal: React.FC<ActiveNowModalProps> = ({showModal}) => {
  return (
    <View style={styles.container}>
      <DrawerItem
        onPress={() => showModal(false)}
        isActive
        isModalOpen
        title="Active Now"
        icon={require('../../assets/images/active-Dot.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    flex: 0.88,
    backgroundColor: Colors.Black.default,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
});

export default ActiveNowModal;

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

interface BlackButtonProps {
  title: string;
  onPress: any;
}
const BlackButton: React.FC<BlackButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: 290,
    height: 70,
    backgroundColor: Colors.Black.default,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {color: 'white', fontSize: 20, fontFamily: Fonts.Raleway.SemiBold},
});

export default BlackButton;

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface IconTextProps {
  icon: any;
  text: string;
  isVideo?: boolean;
}
const IconText: React.FC<IconTextProps> = ({icon, text, isVideo}) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={icon}
        style={[styles.imageStyle, isVideo && styles.isVideo]}
      />
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
  imageStyle: {width: 26, height: 35},
  isVideo: {width: 38},
});

export default IconText;

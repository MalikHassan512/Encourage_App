import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../constants/Colors';
const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnContainer: {
    marginBottom: 25,
    height: height / 5.4,
    justifyContent: 'space-between',
  },
  titleText: {
    marginLeft: -20,
    position: 'absolute',
    top: 160,
    width: '120%',
  },
  mainTitleText: {
    fontSize: 129,
    color: Colors.Black.default,
    fontWeight: 'bold',
  },

  appText: {
    fontSize: 29,
    marginRight: 35,
    fontWeight: 'bold',
    color: Colors.Black.default,
  },
  appContainer: {alignSelf: 'flex-end', position: 'absolute', top: 310},
});

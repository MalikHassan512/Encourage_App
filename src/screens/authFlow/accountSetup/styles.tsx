import {StyleSheet} from 'react-native';

import Colors from '../../../constants/Colors';
import {
  widthPercentageToDP as wp,
  // heightPercentageToDP as hp,
} from '../../../constants/Diemensions';
import Fonts from '../../../constants/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F0FF',
  },
  headingContainer: {
    alignItems: 'center',
    marginTop: wp(30),
  },
  headingText: {
    fontFamily: Fonts.Raleway.Bold,
    fontSize: 20,
    color: Colors.Black.default,
  },
  nameField: {marginTop: wp(10)},
  switchImageSize: {width: 40, height: 27},
  switchContainer: {
    flexDirection: 'row',
    marginLeft: wp(6),
    marginTop: wp(5),
    marginBottom: wp(5),
    alignItems: 'center',
  },
  locationText: {
    marginLeft: wp(3),
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
  },
  margin: {marginTop: wp(5)},
});

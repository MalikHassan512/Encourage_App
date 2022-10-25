import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../constants/Diemensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White.default,
  },
  helloUserText: {
    fontSize: 36,
    color: Colors.Black.default,
    fontWeight: 'bold',
  },
  helloUserView: {
    marginTop: hp('3%'),
    marginHorizontal: wp('5%'),
  },
  statusBoxView: {
    marginHorizontal: wp(5),
    backgroundColor: Colors.Black.default,

    padding: hp(4),
    borderRadius: 20,
    marginTop: hp(2),
  },
  dayNdateText: {color: Colors.Red.default, fontSize: 17},
  activityStatusText: {color: Colors.White.default, fontSize: 17},
  activityStatus: {
    marginTop: wp(8),
    marginBottom: wp(10),
  },
  iconsCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(12),
    marginTop: wp(10),
  },
  dropDownCon: {marginTop: wp(20)},
  btnCon: {marginTop: wp(8)},
});

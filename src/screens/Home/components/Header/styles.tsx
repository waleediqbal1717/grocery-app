import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import theme from '../../../../theme';
const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    alignItems: 'center',
    height: responsiveHeight(20),
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyConteent: 'space-between',
    alignItems: 'center',
  },
  ProfileLeftView: {
    width: '65%',
    justifyContent: 'center',
    height: '100%',
    paddingLeft: '5%',
  },
  ProfileRightView: {
    width: '35%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '100%',
    paddingRight: '5%',
  },

  profileImage: {
    resizeMode: 'cover',
    height: responsiveWidth(20),
    width: responsiveWidth(20),
    borderRadius: 8,
    backgroundColor: '#F4F4FC',
    elevation: 5,
  },
  locationIcon: {
    resizeMode: 'contain',
    height: responsiveWidth(5),
    width: responsiveWidth(5),
  },
});

export default styles;

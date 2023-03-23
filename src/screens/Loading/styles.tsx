import {StyleSheet} from 'react-native';
import theme from '../../theme';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: responsiveWidth(100),
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2DCDC',
  },
});

export default styles;

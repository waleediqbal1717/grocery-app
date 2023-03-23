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
    width: '100%',
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
  },
});

export default styles;

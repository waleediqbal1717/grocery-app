import {responsiveFontSize} from 'react-native-responsive-dimensions';

const colors = {
  primary: '#FCFEFF',
  secondary: '#FF844C',
  textColorDark: '#000',
  lightGray: '#DADCE0',
  white: '#fff',
};

const theme = {
  colors: {
    primary: colors.primary,
    secondary: colors.secondary,
    darkText: colors.textColorDark,
    white: colors.white,
  },
  subTitle: {
    fontSize: responsiveFontSize(2.25),
    color: '#000',
    lineHeight: 22,
  },
  subTitleSmall: {
    fontSize: responsiveFontSize(1.75),
    lineHeight: 22,
    color: '#000',
  },
  title: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: '#000',
    lineHeight: 40,
  },
};

export default theme;

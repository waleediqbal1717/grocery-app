import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  Platform,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import styles from './styles';
import theme from '../../theme';
const Cart = observer(() => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={theme.colors.primary}
      />
    </SafeAreaView>
  );
});

export default Cart;

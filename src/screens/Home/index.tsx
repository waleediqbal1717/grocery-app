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
import Header from './components/Header';
import Categories from './components/Categories';
const Home = observer(() => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={theme.colors.primary}
      />
      <Header />
      <Categories />
    </SafeAreaView>
  );
});

export default Home;

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {observer} from 'mobx-react-lite';
import styles from './styles';
import theme from '../../theme';
import {goToHome} from '../../navigation';
const Loading = observer(() => {
  useEffect(() => {
    setTimeout(() => {
      goToHome();
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={theme.colors.primary}
      />
      <Text>Loading</Text>
    </SafeAreaView>
  );
});

export default Loading;

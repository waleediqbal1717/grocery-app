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
import theme from '../../../../theme';
const Header = observer(() => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.ProfileLeftView}>
          <Text style={theme.subTitle}>Good Morning</Text>
          <Text style={theme.title}>Ghazi</Text>
          <View style={styles.row}>
            <Image
              source={require('../../../../assets/images/location.png')}
              style={styles.locationIcon}
            />
            <Text style={theme.subTitleSmall}>Tlogomas, Malang</Text>
          </View>
        </View>
        <View style={styles.ProfileRightView}>
          <Image
            source={require('../../../../assets/images/userProfile.png')}
            style={styles.profileImage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
});

export default Header;

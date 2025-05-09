import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Logo from '../../assets/playstore-icon.png';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={Logo} style={styles.logo1} resizeMode="contain" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes full screen
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  logo1: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: 'blue',
  },
});

export default WelcomeScreen;

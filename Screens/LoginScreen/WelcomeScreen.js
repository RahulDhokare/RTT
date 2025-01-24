import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Logo from '../../assets/playstore-icon.png';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={Logo} style={styles.logo1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    backgroundColor: 'green',
    width: '30%',
    height: '10%',
    alignItems: 'center',
  },
  logo1: {
    backgroundColor: 'blue',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default WelcomeScreen;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.restaurantName}>Spice And Spirit</Text>
      <Entypo name="dots-three-horizontal" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    elevation: 4,
    marginTop: 40,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Header;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';

const FooterNav = ({ onChangeScreen, activeScreen }) => {
  return (
    <View style={styles.container}>
      {/* Glance Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => onChangeScreen('glance')}
      >
        <FontAwesome6
          name="grip-lines"
          size={20}
          color={activeScreen === 'glance' ? 'red' : 'black'}
        />
        <Text
          style={[
            styles.buttonText,
            { color: activeScreen === 'glance' ? 'red' : '#333' },
          ]}
        >
          At a Glance
        </Text>
      </TouchableOpacity>

      {/* Booking Diary Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => onChangeScreen('bookingDiary')}
      >
        <Feather
          name="book-open"
          size={20}
          color={activeScreen === 'bookingDiary' ? 'red' : 'black'}
        />
        <Text
          style={[
            styles.buttonText,
            { color: activeScreen === 'bookingDiary' ? 'red' : '#333' },
          ]}
        >
          Booking Diary
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 8,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default FooterNav;

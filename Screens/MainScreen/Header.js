import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

import BookingDate from './BookingDate';
import BookingDetails from './BookingDetails';
import BookingDiary from './BookingDiary';
import FooterNav from './FooterNav';
import RestaurantName from './RestaurantName';
import ShimmerUi from './ShimmerUi';

const Header = () => {
  const navigation = useNavigation();
  const [activeScreen, setActiveScreen] = useState('glance');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ShimmerUi />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Top Header */}
      <View style={styles.header}>
        <RestaurantName />
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <BookingDate />
        {activeScreen === 'glance' ? <BookingDetails /> : <BookingDiary />}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('Add New Booking')}
      >
        <AntDesign name="pluscircle" size={60} color="red" />
      </TouchableOpacity>

      {/* Bottom Footer Nav */}
      <View style={styles.footer}>
        <FooterNav
          onChangeScreen={setActiveScreen}
          activeScreen={activeScreen}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    elevation: 2,
    zIndex: 1,
  },
  contentContainer: {
    paddingBottom: 150, // Enough space for FAB + Footer
  },
  floatingButton: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    zIndex: 5,
    elevation: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 2,
    backgroundColor: '#fff',
    paddingVertical: 10,
    elevation: 5,
  },
});

export default Header;

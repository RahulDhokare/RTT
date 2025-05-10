import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { fetchBookings,deleteBooking } from "./../../Api/BookingService";
import { useState, useEffect } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { Picker } from "react-native-web";
import { useNavigation } from '@react-navigation/native';

const BookingDiary = () => {
  const navigation = useNavigation();
  const [bookings, setBookings] = useState([]);
  const [totalGuests, setTotalGuests] = useState([]);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const loadBookings = async () => {
    try {
      const response = await fetchBookings();
      const Booking = response.data;

      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };
  const calculateTotalGuests = () => {
    const total = bookings.reduce(
      (acc, booking) => acc + Number(booking.guests),
      0
    );
    setTotalGuests(total);
  };

useEffect(() => {
    loadBookings();
  }, []);

  useEffect(() => {
    calculateTotalGuests(bookings);
  }, [bookings]);

  const handleMenuPress = (bookingId) => {
    setSelectedBookingId(bookingId);
    setMenuVisible(true);
  };

  const handleEdit = () => {

    console.log("Edit booking ID:", selectedBookingId);
    setMenuVisible(false);
    navigation.navigate("Edit Booking", {
      bookingId: selectedBookingId})    // Call your edit function here
  };

  const handleDelete = async () => {
  try {
    await deleteBooking(selectedBookingId);
    setBookings((prevBookings) =>
      prevBookings.filter((b) => b.id !== selectedBookingId)
    );
    setMenuVisible(false);
  } catch (error) {
    console.error("Error deleting booking:", error);
    setMenuVisible(false);
  }
};

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      {/* Chips */}
      <View style={styles.chipContainer}>
        <TouchableOpacity style={styles.chip}>
          <Text style={styles.chipText}>Dinner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chip}>
          <Text style={styles.chipText}>Lunch</Text>
        </TouchableOpacity>
      </View>

      {/* Header Summary */}
      <View style={styles.container}>
        <Text style={styles.total}>Total Guests:</Text>
        <Ionicons name="people-outline" size={24} color="black" />
        <Text style={styles.count}>{totalGuests}</Text>
        <Text style={styles.bookingText}>({bookings.length} Booking)</Text>
      </View>
      
      
      {bookings.length === 0 ? (
       <View style={styles.bookingInfo}>
        <Text style={styles.bookingInfoText}>
          There is no booking for selected date.
        </Text>
      </View>
      ) :
    
     <View>
        {bookings.map((booking) => (
          <View key={booking.id} style={styles.bookingDetails}>
            <View style={styles.row}>
              <Text style={styles.bookingItem}>
                {booking.timeSlot} {booking.firstName} | {booking.guests} Guests
              </Text>
              <TouchableOpacity onPress={() => handleMenuPress(booking.id)}>
                <Entypo
                  style={styles.icon}
                  name="dots-three-horizontal"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.bookingItem}>
              {booking.visitType} {booking.mobile}
            </Text>
          </View>
        ))}
      </View>
      }
 
      {/* Modal Menu */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setMenuVisible(false)}
        >
          <View style={styles.menu}>
            <TouchableOpacity onPress={handleEdit}>
              <Text style={styles.menuItem}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
              <Text style={styles.menuItem}>Delete</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 20,
  },
  chipContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "center",
  },
  chip: {
    backgroundColor: "#eee",
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 8,
    borderRadius: 20,
    elevation: 2,
  },
  chipText: {
    fontSize: 14,
    fontWeight: "500",
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
  },
  count: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  bookingText: {
    fontSize: 16,
    color: "black",
  },
  bookingDetails: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20,
    elevation: 1,
  },
  bookingItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  menu: {
    width: 200,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 10,
    fontSize: 16,
    textAlign: "center",
  },
  bookingInfo: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  bookingInfoText: {
    fontSize: 16,
    color: 'black',
    
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default BookingDiary;

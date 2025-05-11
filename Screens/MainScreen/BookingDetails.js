import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const BookingDetails = () => {
  const peoplecount = 0;
  const bookingCount = 0;
  const statusData = [
    { label: "Pending", count: 0, total: 1 },
    { label: "Confirmed", count: 2, total: 2 },
    { label: "Cancelled", count: 1, total: 1 },
    { label: "No Show", count: 0, total: 0 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.total}>Total Expected:</Text>
        <Ionicons name="people-outline" size={24} color="black" />
        <Text style={styles.count}>{peoplecount}</Text>
        <Text style={styles.bookingText}>({bookingCount} Booking)</Text>
      </View>

      <View style={styles.bookingInfo}>
        <Ionicons name="information-circle-outline" size={24} color="black" />
        <Text style={styles.bookingInfoText}>
          There is no booking for selected date.
        </Text>
      </View>
      
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Text style={styles.dinnerText}>Dinner</Text>
          <Text style={styles.expectedText}>
            Expected:{" "}
            <Ionicons
              style={styles.iconStyle}
              name="people-outline"
              size={24}
              color="black"
            />{" "}
            {peoplecount}(0)
          </Text>
        </View>
        <Text style={styles.timingText}>(8:00 - 12:00)</Text>
        <View style={styles.horizontalSeparator} />
        <View style={styles.statusRow}>
          {statusData.map((status, index) => (
            <React.Fragment key={status.label}>
              <View style={styles.statusBox}>
                <Text style={styles.statusText}>{status.label}</Text>
                <Text style={styles.count}>
                  {status.count}({status.total})
                </Text>
              </View>
              {index !== statusData.length - 1 && (
                <View style={styles.separator} />
              )}
            </React.Fragment>
          ))}
        </View>
      </View>

      {/* <View style={styles.separator} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 20,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 5,
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
  bookingInfo: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  bookingInfoText: {
    fontSize: 16,
    color: "black",
    marginLeft: 10,
  },
  horizontalSeparator:{
    height: 1,
    backgroundColor: "#ccc",
    marginHorizontal: 20,
    marginVertical: 15,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#F0F0F0",
    margin: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between", // this keeps spacing but in tight container
    alignItems: "center",
    marginBottom: 4,
  },
  dinnerText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
    paddingHorizontal: 14,
  },
  expectedText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 30,
    alignItems: "center",
  },
  timingText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
    paddingHorizontal: 14,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusBox: {
    flex: 1,
    alignItems: "center",
  },
  statusText: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 4,
  },
  count: {
    fontSize: 15,
    fontWeight: "bold",
  },
  separator: {
    width: 1,
    backgroundColor: "#ccc",
    height: "100%",
  },
  iconStyle: {
    marginHorizontal: 5, // Adjust spacing between the icon and text
    marginTop: 2, // Fine-tune vertical alignment
  },
});

export default BookingDetails;

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Header from "../MainScreen/Header";
import AddBooking from "../MainScreen/AddBooking";
import BookingDetails from "../MainScreen/BookingDetails";
import BookingDiary from "../MainScreen/BookingDiary";
const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Welcomepage" component={WelcomeScreen} /> */}
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="heder"
        component={Header}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Add New Booking" component={AddBooking} />

      <Stack.Screen name="BookingDetails" component={BookingDetails} />

      <Stack.Screen name="BookingDiary" component={BookingDiary} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

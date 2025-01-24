import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Login'
import Header from '../MainScreen/Header'
import AddBooking from '../MainScreen/AddBooking'
const Stack = createNativeStackNavigator()
const AuthNavigation = () => {
  return (
    <Stack.Navigator>
    {/* <Stack.Screen name="Welcomepage" component={WelcomeScreen} /> */}
    <Stack.Screen name="login" component={Login} 
    options={{headerShown:false}}/>
    
    <Stack.Screen name="heder" component={Header}
    options={{headerShown:false}}/>

    <Stack.Screen name="addBoking" component={AddBooking}
    />




    </Stack.Navigator>
  )
}

export default AuthNavigation
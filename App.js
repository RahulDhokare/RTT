import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import WelcomeScreen from './Screens/LoginScreen/WelcomeScreen';
import { useState, useEffect } from 'react';
import Login from './Screens/LoginScreen/Login';
import RootNavigation from './RootNavigation';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 10000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <RootNavigation/>
  //   <View >
  //   {isLoaded?<WelcomeScreen/>:<Login/>}
  //  </View>
  // <Login/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

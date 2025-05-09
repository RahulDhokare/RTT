import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,ActivityIndicator,Text} from 'react-native';
import WelcomeScreen from './Screens/LoginScreen/WelcomeScreen';
import { useState, useEffect } from 'react';
import Login from './Screens/LoginScreen/Login';
import RootNavigation from './RootNavigation';
import ShimmerUi from './Screens/MainScreen/ShimmerUi.js';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., checking auth, fetching configs)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return<WelcomeScreen/>
  }
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

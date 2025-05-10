import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Modal} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
const Header = () => {
   const [menuVisible, setMenuVisible] = useState(false);
   const navigatorion = useNavigation();
   const handleMenuPress = () => {
    console.log('Menu pressed');
    setMenuVisible(true);
  };

  const logout = () => {
    navigatorion.navigate('login');
    console.log('Logout pressed');
    setMenuVisible(false);
  }
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.restaurantName}>Spice And Spirit</Text>
      <TouchableOpacity onPress={() => handleMenuPress()}>
      <Entypo name="dots-three-horizontal" size={24} color="black" />
      </TouchableOpacity>
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
                  <TouchableOpacity>
                    <Text style={styles.menuItem} onPress={()=>logout()}>Logout</Text>
                  </TouchableOpacity>
                  <TouchableOpacity >
                    <Text style={styles.menuItem}>Setting</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </Modal>
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
});

export default Header;

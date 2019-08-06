
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import HeaderMenu from './HeaderMenu'

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <HeaderMenu navigation={props.navigation} title="Home" />
      <Text style={styles.drawerItem}>This is Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  drawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E73536',
    margin: 5,
    padding: 15,
    borderRadius: 2,
    borderColor: '#E73536',
    borderWidth: 1,
    textAlign: 'center'
  },
});

export default HomeScreen;
import * as React from 'react';
import {Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Local files and assets can be imported by dragging and dropping them into the editor</Text>
      <Image style={styles.logo} source={require('../assets/professora.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
});

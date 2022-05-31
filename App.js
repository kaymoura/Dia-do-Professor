import * as React from 'react';
import { Text, View, StyleSheet, Alert, Image, Button, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

export default function App() {

  function showFrase(){
    let pos = getRandomIntInclusive(0,4);
    let frase = frases[pos];
    Alert.alert(frase);
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let frases = [
    "O professor é o cara!!!!!!",
    "O professor é o melhor amigo do aluno",
    "O professor é muito importante",
    "O professor é demais!!!!!!",
    "O professor Vaqueli é muito legal!!!!!!"   
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        15 de Outubro dia do professor
      </Text>
      
        <Image style={styles.logo} source={require('./assets/professora.png')} />
      
      <Button 
        title= "Press me"
        color= "blue"
        onPress={() => showFrase()} />
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
    marginTop: 10,
    marginBottom: 10,
    height: 300,
    width: Dimensions.get('window').width - 20,
  },
});

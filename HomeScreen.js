import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={['#7FFF00', '#00FFFF']}
        style={StyleSheet.absoluteFillObject}
      />
      <Image
        source={require('./assets/LOGO ORIGINAL TRANSPARENCIA.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>Presiona para continuar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
  }
});

export default HomeScreen;

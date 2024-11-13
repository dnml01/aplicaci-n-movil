import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PuntosVerdesScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Puntos Verdes</Text>
        <Image source={require('./assets/LOG_AMBIENTE.gif')} style={styles.logo} />
      </View>

      {/* Imagen de fondo como mapa que ocupa casi toda la pantalla */}
      <Image source={require('./assets/foto de mapa .png')} style={styles.mapImage} />

      {/* Texto descriptivo en la parte inferior, sobre la barra de navegación */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Cada punto verde muestra qué tipo de basura se puede tirar.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 32,
    backgroundColor: '#FFFFFF',
    elevation: 4,
    zIndex: 1,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  mapImage: {
    width: '100%',
    height: '80%', 
    resizeMode: 'cover',
  },
  descriptionContainer: {
    position: 'absolute',
    bottom: 50, 
    left: 16,
    right: 16,
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 2,
  },
  descriptionText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
});

export default PuntosVerdesScreen;

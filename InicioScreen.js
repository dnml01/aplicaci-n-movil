import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const data = [
  { id: '1', title: 'Header 1', subtitle: 'Subhead 1' },
  { id: '2', title: 'Header 2', subtitle: 'Subhead 2' },
];

const InicioScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#7FFF00', '#00FFFF']} style={styles.container}>
      {/* Header Principal */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => Alert.alert('Información', 'Este es el menú de la pantalla de inicio.')}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Inicio</Text>
        <TouchableOpacity onPress={() => Alert.alert('Información', 'Este es el logo de la pantalla de inicio.')}>
          <Image source={require('./assets/LOG_AMBIENTE.gif')} style={styles.logo} />
        </TouchableOpacity>
      </View>

      {/* Lista de Información Importante */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.infoContainer}
            onPress={() => Alert.alert('Información', `${item.title}: ${item.subtitle}`)}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="person-circle" size={24} color="#B39DDB" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.headerText}>{item.title}</Text>
              <Text style={styles.subheadText}>{item.subtitle}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="gray" />
          </TouchableOpacity>
        )}
      />

      {/* Main Content */}
      <View style={styles.mainContent}>
        <View style={styles.placeholder}>
          <MaterialIcons name="change-history" size={24} color="gray" />
          <MaterialIcons name="crop-square" size={24} color="gray" />
          <MaterialIcons name="circle" size={24} color="gray" />
        </View>
        <Text style={styles.mainTitle}>Title</Text>
        <Text style={styles.mainSubtitle}>Subtitle</Text>
        
        {/* Imagen en lugar del espacio vacío */}
        <Image source={require('./assets/F10N7002.jpg')} style={styles.image} />
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Mensaje', 'Información detallada en el botón Enabled')}>
            <Text style={styles.buttonText}>Enabled</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Mensaje', 'Información adicional en el botón Enabled')}>
            <Text style={styles.buttonText}>Enabled</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 32,
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subheadText: {
    fontSize: 14,
    color: 'gray',
  },
  mainContent: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  placeholder: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainSubtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 14,
    color: 'black',
  },
});

export default InicioScreen;


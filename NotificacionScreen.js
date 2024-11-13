import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const initialNotificaciones = [
  {
    id: '1',
    title: 'Nota sobre punto verde',
    content: 'Nueva ubicación: Estará disponible pronto.',
    date: 'Hace 2 horas',
    fullContent: 'Esta es la información completa sobre la nueva ubicación del punto verde. Próximamente estará disponible para uso.',
  },
  {
    id: '2',
    title: 'Reciclaje en áreas urbanas',
    content: 'Se ha añadido un nuevo punto verde en el centro.',
    date: 'Ayer',
    fullContent: 'El nuevo punto verde en el centro aceptará plásticos, vidrios y metales. Visítalo para contribuir al reciclaje en la ciudad.',
  },
  {
    id: '3',
    title: 'Actualización de horarios',
    content: 'El camión pasará una hora más temprano los lunes.',
    date: 'Hace 3 días',
    fullContent: 'Para mejorar el servicio, el camión pasará a las 7:00 AM en lugar de las 8:00 AM los lunes. Asegúrate de sacar la basura temprano.',
  },
];

const NotificacionScreen = () => {
  const [notificaciones, setNotificaciones] = useState(initialNotificaciones);

  const handleToggleHide = (id) => {
    setNotificaciones((prevNotificaciones) =>
      prevNotificaciones.map((notif) =>
        notif.id === id ? { ...notif, hidden: !notif.hidden } : notif
      )
    );
  };

  const handleToggleExpand = (id) => {
    setNotificaciones((prevNotificaciones) =>
      prevNotificaciones.map((notif) =>
        notif.id === id ? { ...notif, expanded: !notif.expanded } : notif
      )
    );
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Notificación</Text>
        <Image source={require('./assets/LOG_AMBIENTE.gif')} style={styles.logo} />
      </View>

     
      <LinearGradient colors={['#7FFF00', '#00FFFF']} style={styles.gradientBackground}>
       
        <FlatList
          data={notificaciones}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            !item.hidden && (
              <View style={styles.notificationContainer}>
                <View style={styles.notificationHeader}>
                  <Text style={styles.notificationTitle}>{item.title}</Text>
                  <Text style={styles.notificationDate}>{item.date}</Text>
                </View>
                <Text style={styles.notificationContent}>
                  {item.expanded ? item.fullContent : item.content}
                </Text>
                <View style={styles.notificationActions}>
                  <TouchableOpacity style={styles.actionButton} onPress={() => handleToggleExpand(item.id)}>
                    <Text style={styles.actionText}>{item.expanded ? 'Menos información' : 'Más información'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionButton} onPress={() => handleToggleHide(item.id)}>
                    <Text style={styles.actionText}>Ocultar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          }
        />
      </LinearGradient>
    </View>
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
    elevation: 4,
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
  gradientBackground: {
    flex: 1,
    paddingTop: 16,  
  },
  notificationContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationDate: {
    fontSize: 12,
    color: 'gray',
  },
  notificationContent: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 12,
  },
  notificationActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#E0E0E0',
  },
  actionText: {
    fontSize: 14,
    color: 'black',
  },
});

export default NotificacionScreen;

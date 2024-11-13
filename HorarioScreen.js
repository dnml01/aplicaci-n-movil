import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// Datos simulados de horarios y puntos para diferentes días
const scheduleData = {
  '2024-11-12': [
    { point: 'Punto A', time: '10:00 AM' },
    { point: 'Punto B', time: '12:00 PM' },
    { point: 'Punto C', time: '3:00 PM' },
  ],
  '2024-11-13': [
    { point: 'Punto D', time: '9:00 AM' },
    { point: 'Punto E', time: '11:30 AM' },
    { point: 'Punto F', time: '2:00 PM' },
  ],
  '2024-11-14': [
    { point: 'Punto G', time: '8:00 AM' },
    { point: 'Punto H', time: '1:00 PM' },
    { point: 'Punto I', time: '4:30 PM' },
  ],
  '2024-11-15': [
    { point: 'Punto J', time: '8:00 AM' },
    { point: 'Punto K', time: '1:00 PM' },
    { point: 'Punto L', time: '4:30 PM' },
  ],
  '2024-11-16': [
    { point: 'Punto M', time: '9:00 AM' },
    { point: 'Punto N', time: '4:00 PM' },
    { point: 'Punto P', time: '6:30 PM' },
  ],
};

const HorarioScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  // Función para obtener los horarios de la fecha seleccionada
  const getScheduleForSelectedDate = () => {
    return selectedDate ? scheduleData[selectedDate] : null;
  };

  return (
    <LinearGradient colors={['#7FFF00', '#00FFFF']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Horario</Text>
        <Image source={require('./assets/LOG_AMBIENTE.gif')} style={styles.logo} />
      </View>

      {/* Calendar */}
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#6200EE' },
        }}
        style={styles.calendar}
      />

      {/* Información del día seleccionado */}
      <View style={styles.dateInfo}>
        <MaterialIcons name="local-shipping" size={24} color="#6200EE" />
        <Text style={styles.selectedDateText}>
          {selectedDate ? selectedDate : 'Selecciona una fecha'}
        </Text>
      </View>

      {/* Información de horarios */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>El camión pasa en los siguientes puntos:</Text>
        <Text style={styles.scheduleText}>
          {getScheduleForSelectedDate()
            ? getScheduleForSelectedDate().map((item, index) => (
                <Text key={index}>
                  {item.point} - {item.time}{'\n'}
                </Text>
              ))
            : 'Selecciona una fecha para ver los horarios.'}
        </Text>
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
    elevation: 4,
  },
  headerTitle: {
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
  calendar: {
    margin: 16,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: '#FFFFFF',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 2,
  },
  selectedDateText: {
    marginLeft: 8,
    fontSize: 16,
    color: 'gray',
  },
  infoBox: {
    margin: 16,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 2,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  scheduleText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HorarioScreen;

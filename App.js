import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen'; 
import InicioScreen from './InicioScreen';
import PuntosVerdesScreen from './PuntosVerdesScreen';
import HorarioScreen from './HorarioScreen';
import NotificacionScreen from './NotificacionScreen';

const Tab = createBottomTabNavigator();

// Tab Navigator con las pantallas principales
function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Inicio') {
            iconName = 'home';
          } else if (route.name === 'PuntosVerdes') {
            iconName = 'leaf';
          } else if (route.name === 'Horario') {
            iconName = 'calendar';
          } else if (route.name === 'Notificación') {
            iconName = 'notifications';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Inicio" component={InicioScreen} />
      <Tab.Screen name="PuntosVerdes" component={PuntosVerdesScreen} options={{ tabBarLabel: 'Puntos Verdes' }} />
      <Tab.Screen name="Horario" component={HorarioScreen} />
      <Tab.Screen name="Notificación" component={NotificacionScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [showHome, setShowHome] = useState(true);

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        {showHome ? (
          <HomeScreen onPress={() => setShowHome(false)} /> 
        ) : (
          <MainTabs />
        )}
      </View>
    </NavigationContainer>
  );
}
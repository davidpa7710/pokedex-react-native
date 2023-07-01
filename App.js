import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>
        <Navigation />
    </NavigationContainer>
  );
}

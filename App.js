import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CartItems from './components/CartItems/index'
import { StyleSheet, Text, View } from 'react-native';
import styles from './components/CartItems/styles';

export default function App() {
  return (
    <View>
      
      <CartItems/>
      <StatusBar style="auto" />
    </View>
  );
}



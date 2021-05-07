import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

import BottomTabNavigator from './navigation/BottomTabNavigator'

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    color:'#fff'
  }
})

export default App

import AntDesign from 'react-native-vector-icons/AntDesign'; 
import {MaterialIcons} from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {StyleSheet} from 'react-native'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, HomeParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  
  const colorScheme = useColorScheme();

  return (
   <BottomTab.Navigator
      style={styles.container}
      initialRouteName={'Home'}
   >
     <BottomTab.Screen
        name='Home' 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({color}) => <AntDesign name={'home'} size={24} color={color} />
        }}
      />

      <BottomTab.Screen
        name='ComingSoon' 
        component={MovieDetailsScreen} 
        options={{
          tabBarIcon: ({color}) => <AntDesign name={'videocamera'} size={24} color={color} />
        }}
      />
     
     <BottomTab.Screen
        name='Search' 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({color}) => <AntDesign name={'meh'} size={24} color={color} />
        }}
      />

      <BottomTab.Screen
        name='Downloads' 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({color}) => <AntDesign name={'download'} size={24} color={color} />
        }}
      />
   </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{ 
          title: ''
         }}
      />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const styles=StyleSheet.create({
  container:{
    backgroundColor: '#000',
    color:'#fff'
  }
})
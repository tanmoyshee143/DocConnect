import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import HistoryScreen from '../screens/History';
import consultantDetails from '../screens/Consultation';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabHome = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} 
       options={{
        tabBarIcon: ({focused }) => (
          focused ? <Image source={require('../assets/iconizer-home_icon.png')} style={{width:25,height:25}} /> :
          <Image source={require('../assets/home_icon.png')} style={{width:25,height:25}} />
          
        ),
      }}
      />
      <Tab.Screen name="History" component={HistoryScreen} 
      options={{
        tabBarIcon: ({ focused}) => (
          focused ? <Image source={require('../assets/book_diary_history_icon.png')} style={{width:25,height:25}} />
          : <Image source={require('../assets/book_diary_history_icon1.png')} style={{width:25,height:25}} />
        ),
      }}
      />
    </Tab.Navigator>
  );
};

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false
        }}
        initialRouteName="GetStarted">
          <Stack.Screen name="GetStarted" component={TabHome} />
          <Stack.Screen name="consultantDetails" component={consultantDetails} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Route;
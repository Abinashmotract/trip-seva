import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Onboarding from '../screens/Onboarding';
import Onboarding1 from '../screens/Onboarding1';
import Onboarding2 from '../screens/Onboarding2';
import Login from '../screens/Login';
import CreateAccount from '../screens/CreateAccount';
import VerificationCode from '../screens/VerificationCode';
import HomeScreen from '../screens/HomeScreen';
import StatePlacesScreen from '../screens/StatePlacesScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import TrainRoutesScreen from '../screens/RouteScreens/TrainRoutesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="StatePlacesScreen" component={StatePlacesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PlaceDetailScreen" component={PlaceDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TrainRoutesScreen" component={TrainRoutesScreen} options={{ headerShown: false }} />

        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


import LandingScreen from './src/screens/LandingScreen';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';

const Stack = createStackNavigator();


export default function App() {

    const [isReady, setIsReady] = useState(false);

    const startUp = async () => {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        setIsReady(true);
    }

    useEffect(() => {
        startUp();
    }, [])

    return (
        !isReady ? 
            <AppLoading />
        :
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LandingScreen" component={LandingScreen} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} /> 
                <Stack.Screen name="Home" component={Home} options={{
                    headerShown: false
                }} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}
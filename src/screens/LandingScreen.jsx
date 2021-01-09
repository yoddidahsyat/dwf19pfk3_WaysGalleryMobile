import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import Home from '../../assets/home.png';
import Logo from '../../assets/home-logo.png';

function LandingScreen(props) {

    return (
        <Container style={style.container}>
            <Image source={Logo} style={style.logo} />
            <Image source={Home} style={style.image} />
            <Button onPress={() => props.navigation.navigate('Login')} primary block style={style.button}>
                <Text>Log In</Text>
            </Button>
            <Button onPress={() => props.navigation.navigate('Register')} info block style={style.button}>
                <Text>Register</Text>
            </Button>
        </Container>
    );
}

export default LandingScreen;

const style = StyleSheet.create({
    button: {
        marginTop: 20
    },
    container: {
        padding: 20,
        marginTop: 30
    },
    image: {
        width: 300,
        height: 300
    },
    logo: {
        width: 130,
        height: 80,
    }
})
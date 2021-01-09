import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';

function Register(props) {

    return (
        <Container style={style.container}>
            <Content>
                <Form>
                    <Item>
                        <Input placeholder="Full Name" />
                    </Item>
                    <Item>
                        <Input placeholder="Username" />
                    </Item>
                    <Item last>
                        <Input placeholder="Password" />
                    </Item>
                    <Button onPress={() => props.navigation.navigate('Home')} style={style.button} primary block>
                        <Text>Register</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
}

export default Register;

const style = StyleSheet.create({
    button: {
        marginTop: 20
    },
    container: {
        padding: 20
    }
})
import React, { useState } from 'react';
import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { API, setAuthToken } from '../config/api';

function Login({navigation}) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleLogin = async () => {
        const body = JSON.stringify(formData);
        const config = { headers: { "Content-Type": "application/json" } };
        try {
            const response = await API.post("/auth/login", body, config);
            if (response.status === 200) {
                setAuthToken(response.data.data.token);
                await AsyncStorage.setItem("token", response.data.data.token);
                await AsyncStorage.setItem("user", JSON.stringify(response.data.data));
                navigation.navigate('Home');
            }
        } catch (error) {
            console.log(error);
            alert("Wrong Email or Password");
        }
    };
    
    return (
        <Container style={style.container}>
            <Content>
                <Form>
                    <Item>
                        <Input 
                            placeholder="Email" 
                            onChangeText={text => setFormData({...formData, email: text})} 
                            value={formData.email} 
                        />
                    </Item>
                    <Item last>
                        <Input 
                            placeholder="Password" 
                            onChangeText={text => setFormData({...formData, password: text})} 
                            value={formData.password} 
                            secureTextEntry={true}
                        />
                    </Item>
                    <Button onPress={handleLogin} style={style.button} primary block>
                        <Text>Log in</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
}

export default Login;

const style = StyleSheet.create({
    button: {
        marginTop: 20
    },
    container: {
        padding: 20
    }
})
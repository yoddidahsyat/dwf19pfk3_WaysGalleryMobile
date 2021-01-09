import React, { useEffect, useState } from 'react';
import { Container, Header, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Title } from 'native-base';
// import AppLoading
import { FlatList } from 'react-native';

import { API, uploadURL } from '../config/api';

function Home() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [token, setToken] = useState('');

    
    // const getToken = async () => {
    //     try {
    //         const token = await AsyncStorage.getItem('token')
    //         if(token !== null) {
    //             // value previously stored
    //             setToken(token);
    //         }
    //     } catch(e) {
    //         // error reading value
    //         console.log(e);
    //     }
    // }


    const getPosts = async () => {
        try {
            setLoading(true);
            const response = await API.get('/posts');
            // console.log(response);
            setPosts(response.data.data.posts);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log({err});
        }
    }

    // console.log(posts);

    useEffect(() => {
        getPosts();
    }, []);

    const renderItem = ({item}) => {
        return (
            <ListItem thumbnail key={item.id}>
                <Left>
                    <Thumbnail square source={{ uri: uploadURL + item.postPhotos[0].image }} />
                </Left>
                <Body>
                    <Text>{item.title}</Text>
                    <Text note numberOfLines={1}>{item.description}</Text>
                </Body>
                <Right>
                    <Button transparent>
                    <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        )
    }

    return (
        <Container>
            <Header>
                <Left />
                <Body>
                    <Title>Home</Title>
                </Body>
                <Right />
            </Header>
            <List>
                <FlatList
                    data={posts}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    refreshing={loading}
                    onRefresh={getPosts}
                    initialNumToRender={10}
                />
            </List>
        </Container>
    );
}

export default Home;
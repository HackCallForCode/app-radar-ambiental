import React from 'react';

import { View, Text } from 'react-native';
import { Container } from './styles';

import MenuBar from '../../components/layout/menu-bar';
import Header from '../../components/layout/header';

export default function Home(){
    return(
        <View>
            <Header/>
            <Container>
                <Text>
                    Home
                </Text>
            </Container>
            <MenuBar selected={'Home'} />
         </View>
    );
}
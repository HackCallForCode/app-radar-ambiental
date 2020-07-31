import React from 'react';

import { View, Text } from 'react-native';
import { Container, Title } from './styles';

import MenuBar from '../../../components/layout/menu-bar';
import Header from '../../../components/layout/header';

export default function Details(){
    return(
        <View>
            <Header/>
            <Container>
                <Title>
                    Histórico Denuncias
                </Title>
            </Container>
            <MenuBar selected={'List'} />
         </View>
    );
}
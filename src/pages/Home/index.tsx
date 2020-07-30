import React from 'react';

import { View, Text } from 'react-native';
import { Container } from './styles';

import MenuBar from '../../components/layout/menu-bar';

export default function Home(){
    return(
        <View>
            <Container>
                <Text>
                    Home
                </Text>
            </Container>
            <MenuBar selected={'Home'} />
         </View>
    );
}
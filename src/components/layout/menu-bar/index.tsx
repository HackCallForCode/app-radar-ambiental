import React from 'react';
import { Icon } from 'react-native-elements';

import { Container,Button,LogoAsIcon } from './style';

const logo = require('../../../assets/icons/logo_icon.png');

interface props {
    selected : string
}
export default function MenuBar(props: props){

    const color = 'background: rgba(37, 152, 139, 0.22)';
    const { selected } = props;
    return(
        <Container>
            <Button
                style={selected === 'Home' ? {
                    backgroundColor : color
                }: null}
            >
                <Icon
                    name='home'
                    type='font-awesome'
                    color='#9097A5'
                />
            </Button>
            <Button
                    style={selected === 'Search' ? {
                        backgroundColor : color
                    }: null}
            >
                <Icon
                    name='search'
                    type='font-awesome'
                    color='#9097A5'
                />
            </Button>
            <Button
                    style={selected === 'Logo' ? {
                        backgroundColor : color
                    }: null}
            >
                <LogoAsIcon source={logo} />
            </Button>
            <Button
                    style={selected === 'List' ? {
                        backgroundColor : color
                    }: null}
            >
                <Icon
                    name='list'
                    type='font-awesome'
                    color='#9097A5'
                />
            </Button>
            <Button
                    style={selected === 'Account' ? {
                        backgroundColor : color
                    }: null}
            >
                <Icon
                    name='user-o'
                    type='font-awesome'
                    color='#9097A5'
                />
            </Button>

        </Container>
    );
}
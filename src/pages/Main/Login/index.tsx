import React from 'react';

import { Container,Image,Label,LogWith,Button,ButtonText } from './styles';

const logo = require('../../../assets/logo.png');

//importação de components
import Input from '../../../components/input/text';
import Password from '../../../components/input/password'

export default function Login(){
    return (
        <Container>
            <Image source={logo}/>
            <Input placeholder={'E-mail'}/>
            <Password placeholder={'Senha'}/>
            <Label>Esqueceu sua senha ?</Label>
            <Button>
                <ButtonText>Login</ButtonText>
            </Button>
            <LogWith>Entre com</LogWith>
        </Container>

    );
}
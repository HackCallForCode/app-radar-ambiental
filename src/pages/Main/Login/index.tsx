import React from 'react';

import { Container,Image,Icon,Label,LogWith,Button,ButtonText,ButtonGoogle,ButtonTextGoogle } from './styles';

const logo = require('../../../assets/logo.png');
const google = require('../../../assets/icons/google_icon.png')
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
            <ButtonGoogle>
                <ButtonTextGoogle>
                <Icon source={google}/>  Continuar com Google</ButtonTextGoogle>
            </ButtonGoogle>
        </Container>

    );
}
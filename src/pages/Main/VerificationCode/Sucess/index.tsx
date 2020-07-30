import React from 'react';

import { Container,Image,Title,Text,Button, ButtonText } from './styles';


const sucess = require('../../../../assets/imgs/sucess.png');

export default function Sucess(){

    return(
       <Container>
           <Image source={sucess}/>
           <Title>Parabéns Fulano</Title>
           <Text>Sua conta foi ativada com sucesso, faça suas denuncias </Text>
           <Button> 
               <ButtonText>OK</ButtonText>
           </Button>
       </Container> 
    )
}
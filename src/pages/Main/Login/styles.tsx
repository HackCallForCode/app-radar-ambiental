import styled from 'styled-components/native';

export const Container = styled.View`
    padding-top:5%;
    padding-right:5%;
    padding-left: 5%;
    padding-bottom: 5%;
    background-color: #FFF;
`

export const Image = styled.Image`
    width: 220px;
    height:200px;
    margin-left:18%;
    margin-top:10%;
    margin-bottom: 5%;
`;

export const Label = styled.Text`
    font-family: Poppins_300Light;
    font-size: 16px;
    line-height: 26px;  
    color: #1D293F;
    padding-left:5px;
    padding-bottom:10px;
`;

export const LogWith = styled.Text`
    font-family: Poppins_300Light;
    font-size: 16px;
    line-height: 26px;  
    color: #1D293F;
    padding-left:5px;
    padding-bottom:10px;
    padding-top:15%;
    text-align: center;
`;


export const Button = styled.TouchableOpacity`
    width:100%;
    height: 55px;
    background: #16807E;
    border-radius: 8px;
`;
export const ButtonText = styled.Text`
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    font-family: Poppins_500Medium;
    padding-top:16px;
`;
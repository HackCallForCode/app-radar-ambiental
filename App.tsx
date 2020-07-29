import React from 'react';
import { AppLoading } from 'expo';
import Routes from './src/routes';
import { Poppins_300Light,Poppins_500Medium, useFonts } from '@expo-google-fonts/poppins';
export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_500Medium
  });
  //Aguarda o carregamento das fontes.
  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return (
      <Routes/>
  );
}

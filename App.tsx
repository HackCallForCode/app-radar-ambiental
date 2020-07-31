import React from 'react';
import { AppLoading } from 'expo';
import Routes from './src/routes';
import { Poppins_300Light,Poppins_500Medium, useFonts } from '@expo-google-fonts/poppins';
import { Fahkwang_700Bold } from '@expo-google-fonts/fahkwang';
import { Roboto_700Bold, Roboto_300Light } from '@expo-google-fonts/roboto';
export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Fahkwang_700Bold,
    Roboto_700Bold,
    Roboto_300Light
  });
  //Aguarda o carregamento das fontes.
  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return (
      <Routes/>
  );
}

//import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
//import { 
  /*useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';*/
import Cesta from './projeto-final_cesta/src/telas/Cesta';
import mock from './projeto-final_cesta/src/mocks/cesta';

export default function App() {
  /*const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    //return <AppLoading />
  }
*/
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}

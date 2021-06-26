import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,SafeAreaView} from 'react-native';
import Caixas from './componentes/Caixas'
import {Poppins_500Medium ,Poppins_700Bold,useFonts} from '@expo-google-fonts/poppins'
import Botao from './componentes/Botao'
import B1 from './componentes/borda1'
import B2 from './componentes/borda2'
import B3 from './componentes/borda3'
import Topo from './componentes/topo'
import C2 from './componentes/caixa2'
import Cdata from './componentes/caixa1,5'


export default function App() {
    const [loaded] = useFonts({
      Poppins_500Medium: require('./node_modules/@expo-google-fonts/poppins/Poppins_500Medium.ttf'),
      Poppins_700Bold: require('./node_modules/@expo-google-fonts/poppins/Poppins_700Bold.ttf'),
    });
    
    if (!loaded) {
      return null;
    }
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />  
        <Caixas/>

                    <Cdata/>
                    <Botao/>
                    <Text style={styles.notificar}>Notificar</Text>
                    <Text style={styles.data}>Qua,09 de set de 2020</Text>
                    <Text style={styles.data2}>Data</Text>
                    <Text style={styles.opcional}>(Opcional)</Text>
                    <Text style={styles.NIAR}>Não ir na rua do mercadinho,
            tem muitos cachorros lá.</Text>
                    <Text style={styles.descricao}>Descrição</Text>
                    <B1/>
                    <Text style={styles.cotidiano}>Cotidiano</Text>
                    <B2/>
                    <Text style={styles.categoria}>Categoria</Text>
                    <Text style={styles.cachorro}>Passear com cachorro</Text>
                    <Text style={styles.tarefa}>Titulo da Tarefa</Text>
                    <B3/> 
     
        <Topo/>    
        <C2/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
    },
      notificar:{
        position: 'absolute',
        height: 30,
        width: 96,
        left: 157,
        top: 580,
        justifyContent:'center',  
        fontFamily:"Poppins_500Medium",
        fontSize: 20,
        lineHeight: 30,
        color: '#000'
      },
        data:{
        position: 'absolute',
        width: 250,
        height: 30,
        left: 57,
        top: 525,
        fontFamily:"Poppins_500Medium",
        fontSize: 19,
        lineHeight: 30,
        color: '#fff'
      },
      data2:{
        position: 'absolute',
        width: 60,
        height: 30,
        top: 491,
        left: 50,
        fontFamily:"Poppins_700Bold",
        fontSize: 19,
        lineHeight: 30,
        color:'#000'
      },
      opcional:{
        position: 'absolute',
        width: 75,
        height: 18,
        left: 156,
        top: 309,
        fontFamily:"Poppins_500Medium",
        fontSize: 12,
        lineHeight: 18,
        color:'#606060'
      },
      NIAR:{
        position: 'absolute',
        height: 60,
        width: 320,
        left: 50,
        top: 336,
       fontFamily:"Poppins_500Medium",
        fontSize: 19,
        lineHeight: 30,
        color:'#606060'
      },
      descricao:{
        position: 'absolute',
        height: 30,
        width: 113,
        left: 46,
        top: 302,
        fontFamily:"Poppins_700Bold",
        fontSize: 19,
        lineHeight: 30,
        color:'#000'
      },
      cotidiano:{
        position: 'absolute',
        height: 30,
        width: 110,
        left: 50,
        top: 249,
       fontFamily:"Poppins_500Medium",
        fontSize: 19,
        lineHeight: 30,
        color: '#606060'
      },
      categoria:{
        position: 'absolute',
        height: 30,
        width: 114,
        left: 43,
        top: 213,
        fontFamily:"Poppins_700Bold",
        fontSize: 19,
        lineHeight: 30,
        color:'#000'
      },
      cachorro:{
        position: 'absolute',
        height: 30,
        width: 260,
        left: 50,
        top: 164,
       fontFamily:"Poppins_500Medium",
        fontSize: 19,
        lineHeight: 30,
        color: '#606060'
      },
      tarefa:{
        position: 'absolute',
        height: 30,
        width: 172,
        left: 43,
        top: 128,
        fontFamily:"Poppins_700Bold",
        fontSize: 19,
        lineHeight: 30,
        color:'#000',
 
      }

});




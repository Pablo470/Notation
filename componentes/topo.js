import React from 'react';
import {View, Text,TextInput,StyleSheet} from 'react-native';

export default function(props){
      return(
        <View style={{width:'100%',position:'absolute'}}>
              <View style={{width:400, height:92,top:-1,left:0, position:'absolute',backgroundColor:'#006EFF', flex: 1,justifyContent: 'center',alignItems:'stretch',elevation:15}}>
                        <Text style={styles.NV}>Nova Tarefa</Text>
                        <View style={styles.container}>
                        <View style={styles.B5}></View>   
                        <View style={styles.B6}></View>
                        <View style={styles.B7}></View>
                        </View>
              </View>
        </View>

)};

const styles = StyleSheet.create({
      NV:{
            position: 'absolute',
            height: 45,
            width: 240,
            top: 30,
            left:100,
            fontSize: 30,
            lineHeight: 45,
            fontFamily:"Poppins_700Bold",flex: 1,
            backgroundColor: '#006EFF',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
      },
      B5:{
            position:'absolute',
                backgroundColor:'#fff',
                borderWidth:1,  
                borderColor:'#fff',
                height: 4,
                width: 30,
                left: 20,
                top: -1,
                borderWidth:1
        },
        B6:{
            position:'absolute',
                backgroundColor:'#fff',
                borderColor:'#fff',
                height:4,
                width: 30,
                left: 20,
                top: 8,
                borderWidth:1
        },
        B7:{
                position: 'absolute',
                backgroundColor:'#fff',
                borderColor:'#fff',
                height:4,
                width: 30,
                left: 20,
                top: 17,
                borderWidth:1
        },
        container: {
            position: 'absolute',
            flex: 1,
            backgroundColor: '#006EFF',
            alignItems: 'center',
            justifyContent: 'center',
            height: 4,
            width: 26,
            left: 0,
            top: 45,
        }
});


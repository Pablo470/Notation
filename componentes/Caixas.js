import React from 'react';
import {View, Text,TextInput,StyleSheet} from 'react-native';

export default function(props){
      return(
            <View style={{width:'100%',position:'absolute'}}>
                  <View style = {{width:125, height:41,backgroundColor:'#006EFF',left:141,top:702, position:'absolute'}}>
                              <Text style={{color:'#fff', width: 115,height: 42,left:5 ,fontFamily:"Poppins_700Bold",  fontSize: 20,lineHeight: 40,position:'absolute'}}>Adicionar</Text>
                  </View> 
              
            </View>
      )
}

const styles = StyleSheet.create({
      adicionar:{
            color: '#fff',
            position: 'absolute',
            width: 115,
            height: 32,
            left:140, 
            top: 707, 
            backgroundColor:'#006EFF',
            fontSize: 20,
            lineHeight: 30,
            justifyContent:'center',  
            fontFamily:"Poppins_700Bold"
      }
});


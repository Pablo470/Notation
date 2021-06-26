import React from 'react';
import {View, Text,TextInput,StyleSheet} from 'react-native';

export default function(){
      return(
            <TextInput style={styles.B1}/>   
      )}

      const styles = StyleSheet.create({
            B1:{
              position:'absolute',
              borderWidth:1,
              borderColor:'#000',
              height: 144,
              width: 328,
              left: 42,
              top: 333,      
              borderRadius:8,
              alignItems: 'center',
              justifyContent: 'center',
              }
      });
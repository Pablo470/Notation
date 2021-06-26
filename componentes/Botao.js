import React, {useState} from 'react';
import {Text, View,Switch, StyleSheet } from 'react-native';

export default function(props){
      const[ligado,setLigado]=useState(true)
      return(
            <View style={styles.BT}>
                  <Text></Text>
                  <Switch
                    value={ligado}
                    trackColor={{false:'#C4C4C4',true:'#C4C4C4'}}
                    thumbColor={ligado ? '#fff' : '#fff'}
                    
                  />
            </View>
      )
}

const styles = StyleSheet.create({
  BT: {
    color: '#000',
    position: 'absolute',
    width: 49.5,
    height: 18,
    left:171,
    top: 605.4,
  }
});
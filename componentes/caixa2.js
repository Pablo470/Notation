import React from 'react'
import {View, Text,StyleSheet} from 'react-native';


export default function(props){

  return(
     <View style={{width:'100%',position:'absolute'}}>
         <View style={{flex: 0.3,
    backgroundColor: 'transparent',
    borderWidth: 0.1,elevation:4
           ,position:'absolute',width:368,height:560,top:115, left:19}}>
        
         </View>     
     </View>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
 middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  }
});
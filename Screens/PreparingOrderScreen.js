import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
 
const PreparingOrderScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown :false,
        });
        setTimeout(() => {
            navigation.navigate("Delivery") ;
        },4000)        
    })
  return (
    <View style={{backgroundColor:"#669B7C",flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image 
            source={{uri :"http://clipart-library.com/images/yikAK8riE.gif"}}
            style={{height:300,width:300,}}/>
      <Text style={{fontSize:16,fontWeight:'400',color:"white",margin:10,textAlign:'center',marginTop:20}}>Waiting for restaurant to accepte your order !! </Text>
       

    </View>
  )
}

export default PreparingOrderScreen
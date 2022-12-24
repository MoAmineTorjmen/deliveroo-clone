import { View, Text,TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { itemOfTheBasket, itemOfTheBasketTotalPrice } from '../../featurs/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const item = useSelector(itemOfTheBasket) ;
    const totalPrice = useSelector(itemOfTheBasketTotalPrice);
    const navigation = useNavigation();

    if(item.length <= 0) return
  return (
    
      <TouchableOpacity style={{flexDirection:'row',marginHorizontal:20, position:"absolute",
            zIndex:99,
            bottom:20,
            backgroundColor:"#669B7CF0",
            padding:15,
            borderRadius:10,
            alignItems:'center'}} 
            onPress={() => navigation.navigate("Basket")}>
        <Text style={{color:"white",textAlign:'center',fontSize:18,fontWeight:'700',backgroundColor:"#557669F0",paddingHorizontal:10,paddingVertical:5,borderRadius:5}}>{item.length}</Text>
        <Text style={{flex:1,color:"white",textAlign:'center',fontSize:18,fontWeight:'700',letterSpacing:0.5}}>View Basket</Text>
        <Text style={{color:"white",textAlign:'center',fontSize:18,fontWeight:'700'}}>{totalPrice} DT</Text>
      </TouchableOpacity>          
    
  )
}

export default BasketIcon
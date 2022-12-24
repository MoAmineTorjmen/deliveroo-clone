import { View, Text, Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import EntypoIcon from 'react-native-vector-icons/Entypo'; 
import {useDispatch, useSelector } from 'react-redux';
import { addToBasket, itemOfTheBasket, itemOfTheBasketWithID, removefromBasket } from '../../featurs/basketSlice';
 
    const DishRow = ({id,image,name,description,price}) => {
    
        const [isPressed,setisPressed] = useState(false); 

        const item = useSelector((state) => itemOfTheBasketWithID(state,id));
        const dispatch = useDispatch();
        const addItemToBasket = () => {
            dispatch(addToBasket({id,image,name,description,price}));
        };

        const removeItemfrombasket = () => {
            if (item.length <=0)  return ;

            dispatch(removefromBasket({id}));
        }

    return (
    <View style={{ backgroundColor:"#fff", marginBottom:5,marginHorizontal:5,borderRadius:5,}} > 
        <TouchableOpacity style={{flexDirection:'row' ,borderRadius:5}}   
                onPress={() => setisPressed(!isPressed)}>
            <View>
                <Image 
                        source={{uri : image}}
                        style={{width:120,height:120,borderTopLeftRadius:5,borderBottomLeftRadius:5 }}
                        />
                <Text style={{
                    fontSize:14,
                    padding:3,
                    borderBottomRightRadius:10,
                    fontWeight:'600',
                    top:0,
                    left:0,
                    position:'absolute',
                    backgroundColor:"#FFBF00B3",
                    borderTopLeftRadius:5
                }} >{price} DT</Text>                    
                </View>
            <View style={{paddingHorizontal:10,flex:1}}>
                <Text style={{fontSize:17.5,fontWeight:'600'}}>{name}</Text>
                <Text style={{fontSize:11,fontWeight:'300'}} >{description} </Text>
                <Text style={{fontSize:14,fontWeight:'300',marginTop:0,color:"#000"}}>Long press to see more details </Text>
            </View>
            {isPressed && (
                <View>
                    <TouchableOpacity style={{flex:1,flex:1,backgroundColor:"#799351",alignItems:'center',justifyContent:'center',borderTopRightRadius:5,borderBottomRightRadius:5,borderTopLeftRadius:5}}
                            onPress={addItemToBasket}
                            >
                        <EntypoIcon name="plus" size={22} color="#fff" />
                    </TouchableOpacity>    
                        <Text style={{fontSize:17.5,fontWeight:'600',flex:1,textAlign:'center',textAlignVertical:"center"}}>{item.length}</Text>
                    <TouchableOpacity 
                            style={{
                                flex:1,
                                width:120/3,
                                flex:1,
                                backgroundColor:  "#B8405E",
                                alignItems:'center',
                                justifyContent:'center',
                                borderTopRightRadius:5,
                                borderBottomRightRadius:5,
                                borderTopLeftRadius:5}}
                            onPress={removeItemfrombasket} 
                           >
                        <EntypoIcon name="minus" size={22} color="#fff"  /> 
                    </TouchableOpacity>
            </View>
            )}
            

        </TouchableOpacity>
        
    </View>

  )
}

export default DishRow
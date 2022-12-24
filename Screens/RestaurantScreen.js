import { View, Text, Image , TouchableOpacity,ScrollView} from 'react-native'
import {React,useEffect,useLayoutEffect, useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'; 
import EntypoIcon from 'react-native-vector-icons/Entypo'; 
import OcticonsIcon from 'react-native-vector-icons/Octicons'; 
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons'; 
import DishRow from './Components/DishRow';
import sanityClient from "../sanity" 
import { StatusBar } from 'expo-status-bar';
import BasketIcon from './Components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../featurs/restaurantSlice';

const RestaurantScreen = () => {

const navigation =useNavigation();
const dispatch = useDispatch()

useLayoutEffect(()=> {
    navigation.setOptions({
      headerShown :false,
    })
  
},[]);
  

    const 
    {
        params:
        {
            id,
            imageUrl,
            title,
            rate,
            genre,
            adress,
            describtion,
        },
    } = useRoute()


    const [dishList,SetdishList] = useState([]);

useEffect(() => {
    dispatch(setRestaurant({id,imageUrl,title,rate,genre,adress,describtion}));
    
    sanityClient.fetch(
        `
        *[_type=='dish' && type._ref == $id ]{
            _id,
            name,
            price,
           short_description,
            "imageUrl": image.asset->url
         }
        `, {id}
    ).then( data => {
        SetdishList(data);
    })
},[]);

  return (
    <>
        <BasketIcon/>
        <ScrollView  style={{flex:1}}>
                <View style={{position:'relative'}}>
                    <Image source={{uri: imageUrl}} style={{height:230,resizeMode:'cover'}}/>
                    <TouchableOpacity style={{position:'absolute',top:50,left:20}}
                    onPress= {navigation.goBack}>
                        <View style={{ backgroundColor:"white",width:50,height:35,borderRadius:100,alignItems:'center',justifyContent:"center"}}>
                            <AntDesignIcon name="arrowleft" size={25} color="#557153" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{padding:10,backgroundColor:"#fff"}}>
                    <Text style={{fontSize:30,color:"#000",fontWeight:'800' }}>{title}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <AntDesignIcon name="star" size={19} color="#FACF5A" /> 
                        <Text style={{fontWeight:"500",fontSize:15  ,marginLeft:5,color:"#B2B2B2"}}>{rate}</Text>
                        <Text style={{fontWeight:"500",fontSize:15,marginLeft:5,color:"#B2B2B2",marginRight:10}}>- {genre}</Text>

                        <EntypoIcon name="location-pin" size={22} color="#B2B2B2" />  
                        <Text style={{fontWeight:"500",fontSize:15,marginLeft:0,color:"#B2B2B2"}}> {adress}</Text>
                    </View>
                    <Text style={{fontWeight:"500",fontSize:15,marginTop:5,color:"#B2B2B2"}}>{describtion}</Text>
                </View> 
                <TouchableOpacity style={{flexDirection:'row',backgroundColor:"#fff",paddingVertical:15,paddingHorizontal:10,marginTop:3,alignItems:'center'}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <OcticonsIcon name="question"  size={24} color="#B2B2B2" />  
                        <Text style={{fontWeight:"700",fontSize:18,color:"#000",marginLeft:10}}> Have a food allergy ? </Text>
                    </View>
                    <MaterialIconsIcon name="arrow-forward-ios"  size={22} color="#B2B2B2" />  
                </TouchableOpacity>
                
                <Text style={{fontSize:22,fontWeight:'600',padding:10,}}>Menu</Text>
                
                <View style={{paddingBottom:100}}>
                    {dishList?.map(dish => (
                        <DishRow 
                        key         = {dish._id}
                        id          = {dish._id}
                        image       = {dish.imageUrl} 
                        name        = {dish.name} 
                        description = {dish.short_description} 
                        price       = {dish.price}  
                        /> 
                        ))}
                    {dishList?.map(dish => (
                        <DishRow 
                            key         = {dish._id}
                            id          = {dish._id}
                            image       = {dish.imageUrl} 
                            name        = {dish.name} 
                            description = {dish.short_description} 
                            price       = {dish.price}  
                            /> 
                            ))} 
                </View>
        <StatusBar style='light' />
        </ScrollView>
    </>
  )
}

export default RestaurantScreen
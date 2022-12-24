import { View, Text,Image,TouchableOpacity } from 'react-native'
import {React,useLayoutEffect} from 'react'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({id,imageUrl,title,rate,genre,adress,describtion}) => {

  const navigation =useNavigation();

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerShown :false,
    })
  
  },[]);
  
   

  return (
    <TouchableOpacity style={{marginTop:15,marginHorizontal:5}}
    onPress={()=>{
      navigation.navigate("Restaurant", {
        id,
        imageUrl,
        title,
        rate,
        genre,
        adress,
        describtion
      })
    }}> 
        <Image style={{width:250,height:120,flex:1}}
                  source = {{uri : imageUrl}} />
                  
        <View style={{padding:10,paddingBottom:15,backgroundColor:"#fff"}}>
            <Text style={{fontSize:18, fontWeight:'700'}}>{title}</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <AntDesignIcon name="star" size={15} color="#557153" /> 
                <Text style={{fontWeight:"500",marginLeft:5,color:"#557153"}}>{rate} </Text>
                <Text style={{fontWeight:"400",marginLeft:2}}>- {genre}</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:3,marginLeft:-3}}>
                <Ionicons name="location-outline" size={20} color="#557153" /> 
                <Text style={{fontWeight:"400", }}>{adress}</Text>
               
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard
import { View, Text, TouchableOpacity , ScrollView,Image} from 'react-native'
import {React,StatusBar,useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { itemOfTheBasket, itemOfTheBasketTotalPrice, removefromBasket } from '../featurs/basketSlice';

const BasketScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(itemOfTheBasket) ; 
  const totalPrice = useSelector(itemOfTheBasketTotalPrice);
  

  const [groupedItemInBasket,setGroupedItemInBasket] = useState([]);

  useEffect( () => {
    const groupedItem = items.reduce((results,item)=> {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemInBasket(groupedItem);

  },[items]);

  //console.log(groupedItemInBasket);

  return (
    <ScrollView >
     
        <View style={{backgroundColor:"white",paddingTop:50,paddingBottom:10,alignItems:'center'}}>
            <Text style={{fontSize:22,fontWeight:'700',textAlign:'auto',letterSpacing:0.5}}>My Basket</Text>
            <TouchableOpacity style={{position:'absolute',top:53,left:20,}}
                onPress= {navigation.goBack}>
                <View style={{  borderRadius:100,alignItems:'center',justifyContent:"center"}}>
                    <AntDesignIcon name="arrowleft" size={30} color="#003865 "  />
                </View>
            </TouchableOpacity> 
        </View>

        <View style={{backgroundColor:"white"}} >
            <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:5,paddingTop:15,justifyContent:'space-between'}}>
                <Text style={{fontSize:16,fontWeight:'500',color:"#CDC9C3"}}>Subtotal : </Text>
                <Text style={{fontSize:16,fontWeight:'500',color:"#CDC9C3"}}>{totalPrice } DT</Text>
            </View>
            <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:5,justifyContent:'space-between'}}>
                <Text style={{fontSize:16,fontWeight:'500',color:"#CDC9C3"}}>Delivery Fea : </Text>
                <Text style={{fontSize:16,fontWeight:'500',color:"#CDC9C3"}}>7 DT</Text>
            </View>
            <View style={{flexDirection:'row',paddingHorizontal:20,paddingVertical:5,justifyContent:'space-between'}}>
                <Text style={{fontSize:16,fontWeight:'600',color:"black"}}>Order Total : </Text>
                <Text style={{fontSize:16,fontWeight:'600',color:"black"}}>{totalPrice + 7 } DT</Text>
            </View>
            <TouchableOpacity style={{flexDirection:'row',marginHorizontal:20,  
              marginVertical:15,
              backgroundColor:"#669B7CF0",
              padding:15,
              borderRadius:10,
              alignItems:'center'}} 
              onPress={() => navigation.navigate("PreparingOrderScreen")}
              >
              <Text style={{flex:1,color:"white",textAlign:'center',fontSize:18,fontWeight:'700',letterSpacing:0.5}}>Place Order !!</Text>
            </TouchableOpacity>
        </View> 
          
        <View style={{paddingBottom:20}}>
          
          {Object.entries(groupedItemInBasket).map(([key,items]) => (
            <View key={key} style={{flexDirection:'row',flex:1,alignItems:'center',marginTop:10,marginHorizontal:10,backgroundColor:"white",borderRadius:10}}>
                <Image 
                    source={{uri : items[0]?.image}} 
                    style={{height:80,width:80,borderRadius:10 }}/>
                <View style={{flex:1,justifyContent:'space-between'}}>

                  <Text style={{fontSize:17,fontWeight:'500',marginLeft:10, }}>{items[0].name}</Text>   
                  <Text style={{fontSize:15,fontWeight:'400',marginLeft:10}}>{items.length} Pieces </Text> 
                  <Text style={{fontSize:15,fontWeight:'300',marginLeft:10}}>price  : {items[0].price} DT</Text> 
                </View>
                <TouchableOpacity style={{ justifyContent:'flex-end',marginRight:10}}> 
                <Text style={{fontSize:15,fontWeight:'300',marginLeft:10,color:"#BD4B4B"}}
                      > Delete </Text> 
                </TouchableOpacity>
            </View>
          ))}
       
        </View>
    </ScrollView>
  )
}

export default BasketScreen
import { View, Text ,SafeAreaView, Image, TextInput, TouchableHighlight, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather'; 
import Categories from './Components/Categories';
import FeaturesRow from './Components/FeaturesRow';


const HomeScreen = () => {

  const navigation =useNavigation();

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerShown :false,
    })
  
  },[]);

  return (
    <SafeAreaView>
      
      {/* Header */}
      <View style={{padding:10,marginTop:35, }}>
        <View style ={{flexDirection :'row'}}>
          <View style={{flex : 1}}>
            <View style ={{flexDirection :'row', alignItems:'center'}} >
              <Image style={{width:50,height:50,borderRadius:30}}
                  source = {{uri : "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/70614842_2455294028130117_7224804963820503040_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-rTw4igRJysAX9x7F_3&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfCmV-wpSBPtUvql9db6yggbSXfjcBn3grBAi2-DTPHz9g&oe=63BD899B"}}/>
              <View  style = {{marginLeft:10}}>
                  <Text style ={{fontSize:15,color:"grey"}}>Delivery now !!</Text>
                  <Text style ={{fontSize:20,fontWeight:'800',letterSpacing:0.1}}>Current location <AntDesignIcon name="down" size={20} color="#557153" /></Text>
              </View>
            </View>
          </View>
          <View style={{ alignItems:'center',justifyContent:'center'}}>
            <FeatherIcon name="user" size={35} color="#557153" />
          </View>
        </View>
        <View style={{marginTop:10,flexDirection:'row',alignItems:'center'}}>
            <View style={{backgroundColor:"#D8D8D8",flex:1,flexDirection:'row',alignItems:'center', paddingLeft:10, borderRadius:5}}>
              <TouchableHighlight>
                <AntDesignIcon name="search1" size={23} color="#000" />
              </TouchableHighlight>
              <TextInput 
                style={{fontSize:16,padding:10,flex:1}}
                placeholder='Restaurant and cuisine '/>
            </View>
        </View>

      </View>
      {/* Header Ended here !! */} 
      <ScrollView style={{marginBottom:170}}>
      {/* categories */}
      <Categories /> 
      
        
      {/* Features Rows */}
        <FeaturesRow 
          title="Feature"
          description = "Paid placement from our partners"/>

        {/* Features Rows */}
        <FeaturesRow 
          title="Teasty Discounts"
          description = "Everyone's been enjoying these juicy discounte!"/>  

        {/* Features Rows */}
        <FeaturesRow 
          title="Offers near you!"
          description = "why not support your local resturant tonight!"/>  
        
        
      </ScrollView>

      
      <StatusBar hidden={false} />
    </SafeAreaView>
  )
}

export default HomeScreen


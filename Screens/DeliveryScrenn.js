import { View, Text, Image , TouchableOpacity} from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'; 
import { useNavigation } from '@react-navigation/native';

const DeliveryScrenn = () => {
    const navigation = useNavigation()
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:"#669B7C",height:180,width:"100%",zIndex:99}}>
        <View style={{marginHorizontal:"5%",marginTop:45,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <TouchableOpacity onPress={ () => {navigation.navigate("Basket")}}>
                <AntDesignIcon name="close" size={30} color="#ffffff"/>
            </TouchableOpacity>
            <Text style={{fontSize:18,fontWeight:"500",color:"#fff"}}>Order help</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:"space-between", flexDirection:"row",backgroundColor:"white",marginHorizontal:"5%",position:'absolute',width:"90%",bottom:-30,padding:15,borderRadius:10 }}>
            <View> 
                <Text style={{fontSize:15,fontWeight:"200",}}>Estimated Arrival</Text>
                <Text style={{fontSize:26,fontWeight:"800",}}>45-55 Minutes</Text>
               
                 
                <Text style={{fontSize:15,fontWeight:"200",marginTop:0}}>Your order is being prepared !! </Text>
            </View>
            <Image 
            source={{uri:"https://im4.ezgif.com/tmp/ezgif-4-f04a0ef45b.gif"}} 
            style={{height:90,width:90,marginTop:-15}}/>
        </View>
      </View>
      <View style={{backgroundColor:"red",flex:1}}>
        <MapView 
        initialRegion={{
            latitude : 36.836602731001456,
            longitude: 10.244824826984672,
            latitudeDelta : 0.005,
            longitudeDelta:0.005
        }}
        style={{ width: '100%',height: '100%'}}>
            <Marker 
                coordinate={{
                    latitude : 36.836602731001456,
                    longitude: 10.244824826984672,
                }}
                title = "KFC LAC 1"
                 identifier='origin'/>
        </MapView>     
      </View>
      <View style={{backgroundColor:"#F2F2F2",padding:15,flexDirection:'row',alignItems:'center' }}>
        <Image style={{width:60,height:60,borderRadius:30,}}
                source = {{uri : "https://www.francetvinfo.fr/pictures/8eYSVFPOiGQw5bgl3nRTNCwycKU/0x173:4117x2486/944x531/filters:format(webp)/2021/12/27/phpZMRFS4.jpg"}}/>
        
        <View style={{marginLeft:15,flex:1}}>
            <Text style={{fontSize:19,fontWeight:"600",}}>Kylian Mbappé</Text>   
            <Text style={{fontSize:15,fontWeight:"200",marginTop:2}}>Your Rider !! </Text> 
        </View>
        <TouchableOpacity>
        <Text style={{fontSize:22,fontWeight:'500',marginLeft:10,color:"#669B7C"}}
                      > Call </Text> 
        </TouchableOpacity>
       </View> 
              
        
      
    </View>
  )
}

export default DeliveryScrenn
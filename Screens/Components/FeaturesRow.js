import { View, Text , ScrollView,} from 'react-native'
import {React,useState,useEffect} from 'react'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import RestaurantCard from './RestaurantCard';
import sanityClient from "../../sanity" 

const FeaturesRow = ({title,description}) => {
    const [resturantList,setResturantList] = useState([]);
    useEffect(() => {
        sanityClient.fetch(
            `
            *[_type=='restaurant']{
                _id,
                name,
                short_description,  
                "imageUrl": image.asset->url,
                adresse,
                rating,
                type -> {title} 
              }
            `
        ).then( data => {
            setResturantList(data);
        })
    },[]);

    return (
    <View style={{margin: 10,}}>
        <View style={{ flexDirection:"row",alignItems:'center'}}>
            <View style={{flex:1}}>
                    <View>
                        <Text style={{fontSize:20,fontWeight:'700' }}>{title}</Text>
                        <Text style={{fontSize:14,fontWeight:'300'}}>{description}</Text>
                    </View>
            </View>
            <View style={{}}>
                <AntDesignIcon name="arrowright" size={28} color="#557153" />
            </View>
        </View>

        <ScrollView
            horizontal
            showsHorizontalScrollIndicator ={false}
            contentContainerStyle={{
                marginHorizontal: -10
            }}
            >
            {/* Resturants Card */}
         
            
            {resturantList?.map(retu => (
                <RestaurantCard
                key         = {retu._id}
                id          = {retu._id}
                imageUrl    = {retu.imageUrl}
                title       = {retu.name} 
                rate        = {retu.rating} 
                genre       = {retu.type.title} 
                adress      = {retu.adresse} 
                describtion = {retu.short_description} 
                />
                ))}
                
        </ScrollView>
    </View>
  )
}

export default FeaturesRow
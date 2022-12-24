import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({ id,imgUrl, title }) => {
  return (
    <TouchableOpacity style={{marginRight:10,alignItems:'center',position:'relative'}}>
      <View>
            <Image style={{width:95,height:95,borderRadius:7}}
                source={{uri : imgUrl }} />
      </View>
      <View style={{position:'absolute',bottom:5,backgroundColor:"#00000080",paddingHorizontal:6,borderRadius:5}}>
        <Text style={{color:"#fff",fontWeight:'500'}}>{title}</Text>
      </View>
    </TouchableOpacity>      
  )
}

export default CategoryCard
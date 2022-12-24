import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient from "../../sanity" 

const Categories = () => {
const [CategorieList,setCategorieList] = useState([]);

useEffect(()=>{
  sanityClient.fetch(
    `
    *[_type=='categorie']
    {
      "id" : _id,
      title,
      "imageUrl": image.asset->url
    }
    `
  ).then(data =>
    {
      setCategorieList(data);
    })
},[]);


  return (
    <ScrollView style={{flexDirection:'row',marginLeft:10,marginTop:5}}
        horizontal
        showsHorizontalScrollIndicator= {false} >

      {CategorieList?.map(cat => (
          <CategoryCard
          key     = {cat.id}
          id      = {cat.id}
          imgUrl  = {cat.imageUrl}  
          title   = {cat.title} />
      ))}   
    </ScrollView>
  )
}

export default Categories
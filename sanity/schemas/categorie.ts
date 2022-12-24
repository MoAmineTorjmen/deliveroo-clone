import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'categorie',
  title: 'Categorie',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
     
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    
  ],
 
})

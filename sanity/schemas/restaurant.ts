import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) =>  Rule.required(),
    }),

    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
       
    }),
     
    defineField({
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'adresse',
      title: 'Restaurant adresse',
      type: 'string',
    }),

    defineField({
      name: 'rating',
      title: 'Enter a Rating form (1-5 Starts)',
      type: 'number',
      validation : (Rule) => Rule.required()
        .min(1)
        .max(5)
        .error("Enter a number between 1 and 5 please !!")
    }),
    
    defineField({
      name: 'type',
      title: 'Categorie',
      validation : (Rule) => Rule.required(),
      type: 'reference',
      to: [ {type: "categorie" }],
    }),

  ],
 
})

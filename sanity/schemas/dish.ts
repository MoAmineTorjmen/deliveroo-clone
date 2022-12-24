import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of the dish',
      type: 'string',
      validation : (Rule) => Rule.required()
    }),
     
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation : (Rule) => Rule.max(200)
    }),
    
    defineField({
      name: 'price',
      title: 'price of the dish in Tunisian Dinar ',
      type: 'number',
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation : (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'type',
      title: 'Restaurant',
      validation : (Rule) => Rule.required(),
      type: 'reference',
      to: [ {type: "restaurant" }],
    }),


  ],
 
})

import { defineField, defineType } from "sanity";

export const imageType = defineType({
    name : 'picture',
    title: 'picture',
    type: 'document',
    fields:[
        defineField({
            name:'pic',
            type:'image'
        }),
        defineField({
            name:'description',
            type:'text'
        })
    ],
    preview:{
        select:{
            title: 'description',
            media: 'pic',
        }
    }
})
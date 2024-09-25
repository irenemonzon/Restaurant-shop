import {object, z} from 'zod'

export const OrderSchema=z.object({
    name: z.string()
            .min(1, ' Your name is required'),
    total:z.number()
            .min(1,'Errors on the order'),
    order:z.array(z.object({
        id:z.number(),
        name:z.string(),
        price:z.number(),
        quantity:z.number(),
        subtotal:z.number()
    }))

})

export const SearchSchema= z.object({
    search:z.string()
            .trim()
            .min(1,{message:'The field should not be empty'})
})
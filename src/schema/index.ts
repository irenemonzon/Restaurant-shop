import {z} from 'zod'

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

export const ProductSchema = z.object({
    name: z.string()
        .trim()
        .min(1, { message: 'Product name should not be empty'}),
    price: z.string()
        .trim()
        .transform((value) => parseFloat(value)) 
        .refine((value) => value > 0, { message: 'Price not valid' })
        .or(z.number().min(1, {message: 'Price is required' })),
    categoryId: z.string()
        .trim()
        .transform((value) => parseInt(value)) 
        .refine((value) => value > 0, { message: 'Category is required' })
        .or(z.number().min(1, {message: 'Category is required' })),
    image:z.string().min(1,{message:'The image is required'})
})
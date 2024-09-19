import {create} from 'zustand'
import { OrderItem } from './types'
import { Product } from '@prisma/client'

interface Store{
    order:OrderItem[]
    addToOrder:(product:Product)=> void

}
export const useStore=create<Store>(()=>({
    order:[],
    addToOrder:(product)=>{
        console.log('agregando..',product)

    }

}))
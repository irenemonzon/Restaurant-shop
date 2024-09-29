"use client"
import useSWR from 'swr'
import OrderCard from '@/components/order/OrderCard'
import Heading from '@/components/ui/Heading'
import React from 'react'
import { OrderWithProducts } from '@/src/types'


const OrderPage = () => {

  const url ='/admin/orders/api'
  const fetcher=()=>fetch(url).then(res=>res.json()).then(data=>data)

  const {data,error,isLoading}= useSWR<OrderWithProducts[]>(url,fetcher,{
    refreshInterval:10000,
    revalidateOnFocus:false

  })

  if(isLoading) return <p>Loading...</p>

  if(data) return (
    <>
      <Heading>
          Admin Orders
      </Heading>
      {data.length ? (
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5'>
          {data.map(order =>(
            <OrderCard
              key={order.id}
              order={order}  
            />

          ))}

        </div>

      ):
      <p className='text-center'>Not pending orders</p>
      }

    </>
  )
}

export default OrderPage
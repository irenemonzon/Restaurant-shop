"use client"

import { useStore } from "@/src/store"

const OrderSummary = () => {

  const order=useStore((state)=>state.order)

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-black">My Order</h1>
      {order.length === 0 ?
      <p className="text-center my-10">Card is empty</p>:
      <div className="mt-5">
        <p> si hay algo</p>
      </div>
      }

    </aside>
    
  )
}

export default OrderSummary
import { prisma } from "@/src/lib/prisma"

async function getCategories(){
  return await prisma.category.findMany()
}

export default async function OrderSidebar () {

  const categories=await getCategories()
  console.log(categories)
 

  return (
    <aside className="md:w-72 md:h-screen bg-white">
        OrderSidebar
    </aside>
  )
}

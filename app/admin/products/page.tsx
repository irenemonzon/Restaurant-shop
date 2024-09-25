import { redirect } from "next/navigation"
import ProductPagination from "@/components/products/ProductPagination"
import ProductTable from "@/components/products/ProductsTable"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import Link from "next/link"
import ProductSearchForm from "@/components/products/ProductSearchForm"

async function ProductCount() {
  return await prisma.product.count()
  
}

async function getProducts(page:number,pageSize:number){
  const skip=(page-1)* pageSize

  const products= await prisma.product.findMany({
    take:pageSize,
    skip,
    include:{
      category:true
    }
  })
  return products
}

export type ProductsWithCategory=Awaited <ReturnType<typeof getProducts>>

const ProductPage =async ({searchParams}:{searchParams:{page:string}}) => {

  const page= +searchParams.page || 1
  const pageSize =10

  if(page < 0)  redirect('/admin/products')
 
  const productsData = getProducts(page, pageSize)
  const totalProductsData= ProductCount()

  const [products,totalProducts]=await Promise.all([productsData,totalProductsData])
  const totalPages=Math.ceil(totalProducts/pageSize)

  if(page >totalPages)redirect('/admin/products')

  return (
    <>
      <Heading>
        Admin Products
      </Heading>
      <div className="flex flex-col md:flex-row md:justify-between gap-5">
        <Link 
          href={'/admin/products/new'}
          className="bg-amber-400 w-full md:w-[50%] lg:w-auto text-xl px-10 py-3 font-bold cursor-pointer rounded-md"
        >
        Create Product
        </Link>
        <ProductSearchForm/>
      </div>
      <ProductTable
        products={products}
      />
      <ProductPagination
        page={page}
        totalPages={totalPages}
      />
    </>
  )
}

export default ProductPage
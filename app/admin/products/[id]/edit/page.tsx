import { notFound } from "next/navigation"
import { prisma } from "@/src/lib/prisma"
import EditProductForm from "@/components/products/EditProductForm"
import ProductForm from "@/components/products/ProductForm"
import GoBackButton from "@/components/ui/GoBackButton"
import Heading from "@/components/ui/Heading"

async function getProductById(id:number){
  const product= await prisma.product.findUnique({
    where:{
      id
    }
  })
  if(!product){
    notFound()
  }
  return product

}

const EditProductPage = async ({params}:{params:{id:string}}) => {
  const product= await getProductById(+params.id)

  return (
   <>
    <Heading>
      Edit Product: {product.name}
    </Heading>
    <GoBackButton/>
  
    <EditProductForm>
      <ProductForm
      product={product}
      />
    </EditProductForm>
   </>
  )
}

export default EditProductPage
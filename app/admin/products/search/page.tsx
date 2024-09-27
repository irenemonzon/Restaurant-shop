import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import ProductSearchForm from "@/components/products/ProductSearchForm";
import ProductTable from "@/components/products/ProductsTable";

async function searchProducts(searchTerm:string){
    const products=await prisma.product.findMany({
        where:{
            name:{
                contains:searchTerm,
                mode:'insensitive'
            }
        },
        include:{
            category:true
        }
    })
    return products
}

export default async function SearchPage({searchParams}:{searchParams:{search:string}}){

    const products= await searchProducts(searchParams.search)

    return(
       <>
        <Heading>
            Search Results: {searchParams.search}
        </Heading>
        <div className="flex flex-col md:flex-row md:justify-end">
        <ProductSearchForm/>
      </div>
      {products.length ? (
         <ProductTable
         products={products}
         />

      ):<p className="text-center text-lg"> No results found</p> } 
       
       </>
    )

}
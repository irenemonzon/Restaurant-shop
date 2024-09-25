import Link from "next/link"

type  ProductPaginationProps={
    page:number
    totalPages:number
}

const ProductPagination = ({page,totalPages}:ProductPaginationProps) => {
    const pages=Array.from({length:totalPages},(_, i)=>i+1)


  return (
    <nav className="flex justify-center py-10">
         {page > 1 &&(

             <Link
             href={`/admin/products?page=${page -1}`}
             className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset rin-gray-300 focus:z-20 focus:outline-offset-9" 
             >&laquo;
             </Link>
        )}
        {pages.map(currentpage=>(
            <Link
                key={currentpage}
                href={`/admin/products?page=${currentpage}`}
                className={`${page ===currentpage ? 'font-black bg-amber-400':'bg-white' } px-4 py-2 text-sm text-gray-900 ring-1 ring-inset rin-gray-300 focus:z-20 focus:outline-offset-9`}
            >
            {currentpage}
            </Link>
        ))}
        {page < totalPages && (
             <Link
             href={`/admin/products?page=${page +1}`}
             className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset rin-gray-300 focus:z-20 focus:outline-offset-9" 
             >&raquo;
             </Link>
        )}
    </nav>
  )
}

export default ProductPagination
import { categories } from "@/prisma/data/categories"
import { Category } from "@prisma/client"
import Image from "next/image"

type CategoryIconProps={
    category:Category
}

const CategoryIcon = ({category}:CategoryIconProps) => {
  return (
    <div className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}>
        <div className="w-20 h-20 relative">

            <Image 
                src={`/icon_${category.slug}.svg`} alt="Image Category"
                fill
            />  
        </div>
        <p className="text-xl font-bold">
            {category.name}
        </p>
        
    </div>
  )
}

export default CategoryIcon
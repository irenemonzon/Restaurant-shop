"use client"
import { useRouter } from "next/navigation"


const GoBackButton = () => {
    const router=useRouter()

  return (
    <button
        onClick={()=>router.back()}
        className="bg-amber-400 w-full md:w-[50%] lg:w-auto text-xl px-10 py-3 font-bold cursor-pointer rounded-md"
     >
        Go back
    </button>
  )
}

export default GoBackButton
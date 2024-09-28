import Heading from '@/components/ui/Heading'
import Link from 'next/link'


const notFound = () => {
  return (
    <div className='text-center'>
        <Heading>
            Product not found
        </Heading>
        <Link
        href='/admin/products'
        className=' bg-amber-400 text-black py-3 px-10 text-xl text-center font-bold cursor-pointer w-full lg:w-auto'

        >   
            Go to products
        </Link>
    </div>
  )
}

export default notFound
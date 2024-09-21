import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex justify-center mt-5'>
        <div className='relative w-40 h-40'>
            <Image
                fill
                alt="Logo fresh Coffe"
                src='/logo.svg'
            />

        </div>
        
    </div>
  )
}

export default Logo
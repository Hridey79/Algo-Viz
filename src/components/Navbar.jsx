import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black w-screen h-20 flex  flex-col justify-center items-center gap-2 '>
        <div className='text-white text-3xl'>
           <Link href={'/'}>Algo-Viz</Link>
        </div>
        <div className='text-gray-200 hidden md:inline'>
            Visualize algorithms for better understanding.
        </div>
    </div>
  )
}

export default Navbar
import Link from 'next/link'
import React from 'react'

const Topbar = () => {
  return (
    <nav>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
            <Link href={"/"} className='text-5xl text-white font-semibold'>LOGO</Link>
            <div className='Menu'></div>
        </div>
    </nav>
  )
}

export default Topbar
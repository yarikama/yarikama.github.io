"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import TopLink from './TopLink' 
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay'

const TopLinks = [
  {
    title: '關於我',
    href: '#about'
  },
  {
    title: '作品集',
    href: '#projects'
  },
  {
    title: '聯絡我',
    href: '#contact'
  }
]

const Topbar = () => {
  const [topbarOpen, setTopbarOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#24292b] bg-opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link 
                  href={"/"} 
                  className='text-2xl md:text-5xl text-white font-semibold'>
              <p className="font-sans text-[#dadada] rounded bg-gradient-to-br from-[#67a9c3] via-[#5c76b6] to-[#266e8b]">
                Hsu&apos;s Profile
              </p>
            </Link>
            <div className="mobile-menu block md:hidden">
              {
                topbarOpen ? (
                  <button onClick={() => setTopbarOpen(!topbarOpen)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                    <XMarkIcon className='h-5 w-5'/>
                  </button>
                ) : (
                  <button onClick={() => setTopbarOpen(!topbarOpen)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                    <Bars3Icon className='h-5 w-5'/>                    
                  </button>
                )
              }
            </div>
            <div className='menu hidden md:block md:w-auto' id="topbar">
              <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {TopLinks.map((link, index) => (
                  <li key={index}>
                    <TopLink title={link.title} href={link.href} />
                  </li>
                ))}
              </ul>
            </div>
        </div>
        {topbarOpen ? <MenuOverlay links={TopLinks} /> : null}
    </nav>
  )
}

export default Topbar


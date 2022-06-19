import React, {useState} from 'react'
import  {NextComponentType} from 'next'
import Link from 'next/link'

import { useRouter } from 'next/router'
import ResponsiveNav from './ResponsiveNav'



const Header: NextComponentType = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  
  return (
    <header className='fixed justify-between items-center flex w-full h-16 px-5 bg-white top-0 border-b border-slate-400 z-10 ' >
      <Link href="/">
        <a className='text-green-300 text-4xl font-bold font-title hover:text-pink-600 transition-all duration-200 ease-in-out'>Fiona Landeau</a>
      </Link>
      {
        isMenuOpen && (
          <ResponsiveNav />
        )
      }
      {/* <nav className='fixed w-screen h-full z-20 bg-green-300'>
        <Link href="/">
          <a className={`mx-5 ${router.asPath === '/' && 'text-green-300'}`}>Home</a>
        </Link>
        <Link href="/about">
          <a className={`mx-5 ${router.asPath === '/about' && 'text-green-300'}`}>About</a>
        </Link>
        <Link href="/articles">
          <a className={`mx-5 ${router.asPath === '/articles' && 'text-green-300'}`}>Articles</a>
        </Link>
        <Link href="/recettes">
          <a className={`mx-5 ${router.asPath === '/recettes' && 'text-green-300'}`}>Recettes</a>
        </Link>
      </nav> */}
      <div className='relative h-9 w-9 items-center justify-center' onClick={toggleMenu}>
        <div className={`absolute w-full h-1 bg-green-300 rounded-sm top-1/2 ${!isMenuOpen && 'translate-y-1.5'} ${isMenuOpen && 'rotate-45 bg-slate-50'} transition duration-200 ease-in-out`}></div>
        <div className={`absolute w-full h-1 bg-green-300 rounded-sm top-1/2 ${!isMenuOpen && '-translate-y-1.5'} ${isMenuOpen && '-rotate-45 bg-slate-50'} transition duration-200 ease-in-out`}></div>
      </div>

    </header>
  )
}

export default Header
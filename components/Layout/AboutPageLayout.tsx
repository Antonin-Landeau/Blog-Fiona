import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header'

const AboutPageLayout = ({children}: any) => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <nav className='mt-16 flex'>
        <Link href={'/about/sophrologie'}>
          <a className={`py-3 flex-1 text-center ${router.asPath === '/about/sophrologie' && 'bg-secondary-color'}`}>Sophrologie</a>
        </Link>
        <Link href='/about/dietetique'>
          <a className={`py-3 flex-1 text-center ${router.asPath === '/about/dietetique' && 'bg-secondary-color'}`}>dietetique</a>
        </Link>
        <Link href='/about/me'>
          <a className={`py-3 flex-1 text-center ${router.asPath === '/about/me' && 'bg-secondary-color'}`}>me</a>
        </Link>
      </nav>
      {children}
      <Footer />
    </div>
  )
}

export default AboutPageLayout
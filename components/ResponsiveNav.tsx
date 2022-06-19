import React, {useState} from 'react'
import  {NextComponentType} from 'next'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { motion, AnimatePresence} from 'framer-motion'



const ResponsiveNav: NextComponentType = () => {
  const router = useRouter();
  
  return (
    <AnimatePresence>
      <motion.nav
      initial={{y: -300}}
      animate={{y: 0}}
      transition={{ease: 'easeIn', duration: .5}}
      exit={{y: -300}}
      className={`fixed flex flex-col bg-green-300 top-0 bottom-0 right-0 left-0 `}>
        <Link href="/">
          <motion.a initial={{x: 300}} animate={{x: 0}} transition={{delay: .3, ease: 'easeOut', duration:.5}}  className={`mx-5 text-2xl mt-16 text-end ${router.asPath === '/' && 'text-white'} `}>Home</motion.a>
        </Link>
        <Link href="/about">
          <motion.a initial={{x: 300}} animate={{x: 0}} transition={{delay: .4, ease: 'easeOut', duration:.5}} className={`mx-5 text-2xl my-1 text-end ${router.asPath === '/about' && 'text-white'}`}>About</motion.a>
        </Link>
        <Link href="/articles">
          <motion.a initial={{x: 300}} animate={{x: 0}} transition={{delay: .5, ease: 'easeOut', duration:.5}} className={`mx-5 text-2xl my-1 text-end ${router.asPath === '/articles' && 'text-white'}`}>Articles</motion.a>
        </Link>
        <Link href="/recettes">
          <motion.a initial={{x: 300}} animate={{x: 0}} transition={{delay: .6, ease: 'easeOut', duration:.5}} className={`mx-5 text-2xl my-1 text-end ${router.asPath === '/recettes' && 'text-white'}`}>Recettes</motion.a>
        </Link>
      </motion.nav>
    </AnimatePresence>
  )
}

export default ResponsiveNav
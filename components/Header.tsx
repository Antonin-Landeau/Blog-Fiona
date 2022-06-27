import React, { useState } from "react";
import { NextComponentType } from "next";
import Link from "next/link";

import { useRouter } from "next/router";
import ResponsiveNav from "./ResponsiveNav";

const Header: NextComponentType = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed justify-between items-center flex w-full h-16 px-5 bg-white top-0 border-b border-slate-400 z-10 ">
      <Link href="/">
        <a className="text-primary-color text-4xl font-bold font-title transition-all duration-200 ease-in-out md:hidden">
          Fiona Landeau
        </a>
      </Link>
      {isMenuOpen && <ResponsiveNav />}
      <nav className="hidden md:flex mx-auto items-center">
        <Link href="/">
          <a
            className={`mx-5 ${router.asPath === "/" && "text-primary-color"}`}
          >
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`mx-5 ${
              router.asPath === "/about" && "text-primary-color"
            }`}
          >
            About
          </a>
        </Link>
        <Link href="/">
        <a className="text-primary-color text-4xl font-bold font-title transition-all duration-200 ease-in-out mx-5">
          Fiona Landeau
        </a>
      </Link>
        <Link href="/articles">
          <a
            className={`mx-5 ${
              router.asPath === "/articles" && "text-primary-color"
            }`}
          >
            Articles
          </a>
        </Link>
        <Link href="/recettes">
          <a
            className={`mx-5 ${
              router.asPath === "/recettes" && "text-primary-color"
            }`}
          >
            Recettes
          </a>
        </Link>
      </nav>
      {/* <nav className='fixed w-screen h-full z-20 bg-primary-color'>
        <Link href="/">
          <a className={`mx-5 ${router.asPath === '/' && 'text-primary-color'}`}>Home</a>
        </Link>
        <Link href="/about">
          <a className={`mx-5 ${router.asPath === '/about' && 'text-primary-color'}`}>About</a>
        </Link>
        <Link href="/articles">
          <a className={`mx-5 ${router.asPath === '/articles' && 'text-primary-color'}`}>Articles</a>
        </Link>
        <Link href="/recettes">
          <a className={`mx-5 ${router.asPath === '/recettes' && 'text-primary-color'}`}>Recettes</a>
        </Link>
      </nav> */}
      <div
        className="relative h-9 w-9 items-center justify-center md:hidden"
        onClick={toggleMenu}
      >
        <div
          className={`absolute w-full h-1 bg-primary-color rounded-sm top-1/2 ${
            !isMenuOpen && "translate-y-1.5"
          } ${
            isMenuOpen && "rotate-45 bg-slate-50"
          } transition duration-500 ease-in-out`}
        ></div>
        <div
          className={`absolute w-full h-1 bg-primary-color rounded-sm top-1/2 ${
            !isMenuOpen && "-translate-y-1.5"
          } ${
            isMenuOpen && "-rotate-45 bg-slate-50"
          } transition duration-500 ease-in-out`}
        ></div>
      </div>
    </header>
  );
};

export default Header;

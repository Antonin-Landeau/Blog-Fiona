import React, { useState } from "react";
import { NextComponentType } from "next";
import Link from "next/link";

import { useRouter } from "next/router";
import ResponsiveNav from "./ResponsiveNav";
import Image from "next/image";
import mainLogo from "./../public/logo/ANCLAJE_RVB__Bleu.svg";

const Header: NextComponentType = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const urlRegex = new RegExp("/about/");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed justify-between items-center flex w-full h-16 px-5 bg-white top-0 border-b border-slate-400 z-10 ">
      <Link href="/">
        <svg
          className="fill-primary-color md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 99"
          width={200}
        >
          <path d="M91.94,91.73V67.64L58.6,5.87,11.5,91.79h14L35.2,73.65H81.68l9.57,18.14ZM40.85,63,58.46,29.83,76,63Z" />
          <path d="M173.2,9.16H160.49V73.32L109.58,9.17H96.85V91.73h12.77v-64l50.92,64H173.2V75.15a43,43,0,0,1,0-49.31Z" />
          <path d="M214.27,19.77a32.65,32.65,0,0,1,21.53,7.84V12.94A46.49,46.49,0,0,0,214.31,7.8c-15.31,0-28.38,7.06-36.2,18a43,43,0,0,0,0,49.31c7.81,11,20.87,18,36.2,18a46.46,46.46,0,0,0,21.49-5.07V73.45a32.52,32.52,0,0,1-21.53,7.75c-17.54,0-31.26-13-31.26-30.75S196.73,19.77,214.27,19.77Z" />
          <path d="M253.41,80.07V78.32l.18-.18-.18-.14.07-68.84H240.71V91.72h43.66l6.39-11.65Z" />
          <path d="M382.47,91.32c-10-2.74-17.36-10-20.08-20.88l7.76-1.94L336.34,5.87l-40.67,74.2-6.39,11.65h14l1.54-2.89,8.1-15.18h46.48L369,91.79h13.73ZM318.6,63l17.6-33.17L353.73,63Z" />
          <path d="M436.52,80.07V53.21h37.72V41.93l-37.72-.06V20.75h51.91V9.16H411.7V60.33c0,13.68-4.4,20.5-15.85,20.5-7.74,0-14.16-4.85-16.57-13.38l-4.22,1-7.75,1.94c2.72,10.91,10.05,18.14,20.07,20.88a35.87,35.87,0,0,0,9.16,1.25c15.14.12,24.46-7.16,27.28-22V91.72H488.5V80.07Z" />
        </svg>
      </Link>
      {isMenuOpen && <ResponsiveNav />}
      <nav className="hidden md:flex mx-auto items-center">
        <Link href="/">
          <a
            className={`mx-7 text-2xl ${
              router.asPath === "/" && "text-primary-color font-semibold"
            }`}
          >
            Acceuil
          </a>
        </Link>
        <Link href="/about/me">
          <a
            className={`mx-7 text-2xl ${
              urlRegex.test(router.asPath) && "text-primary-color font-semibold"
            }`}
          >
            A propos
          </a>
        </Link>
        <Link href="/">
          <svg
            className="fill-primary-color mx-5 hover:cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 99"
            width={200}
          >
            <path d="M91.94,91.73V67.64L58.6,5.87,11.5,91.79h14L35.2,73.65H81.68l9.57,18.14ZM40.85,63,58.46,29.83,76,63Z" />
            <path d="M173.2,9.16H160.49V73.32L109.58,9.17H96.85V91.73h12.77v-64l50.92,64H173.2V75.15a43,43,0,0,1,0-49.31Z" />
            <path d="M214.27,19.77a32.65,32.65,0,0,1,21.53,7.84V12.94A46.49,46.49,0,0,0,214.31,7.8c-15.31,0-28.38,7.06-36.2,18a43,43,0,0,0,0,49.31c7.81,11,20.87,18,36.2,18a46.46,46.46,0,0,0,21.49-5.07V73.45a32.52,32.52,0,0,1-21.53,7.75c-17.54,0-31.26-13-31.26-30.75S196.73,19.77,214.27,19.77Z" />
            <path d="M253.41,80.07V78.32l.18-.18-.18-.14.07-68.84H240.71V91.72h43.66l6.39-11.65Z" />
            <path d="M382.47,91.32c-10-2.74-17.36-10-20.08-20.88l7.76-1.94L336.34,5.87l-40.67,74.2-6.39,11.65h14l1.54-2.89,8.1-15.18h46.48L369,91.79h13.73ZM318.6,63l17.6-33.17L353.73,63Z" />
            <path d="M436.52,80.07V53.21h37.72V41.93l-37.72-.06V20.75h51.91V9.16H411.7V60.33c0,13.68-4.4,20.5-15.85,20.5-7.74,0-14.16-4.85-16.57-13.38l-4.22,1-7.75,1.94c2.72,10.91,10.05,18.14,20.07,20.88a35.87,35.87,0,0,0,9.16,1.25c15.14.12,24.46-7.16,27.28-22V91.72H488.5V80.07Z" />
          </svg>
        </Link>
        <Link href="/articles">
          <a
            className={`mx-7 text-2xl ${
              router.asPath === "/articles" && "text-primary-color font-semibold"
            }`}
          >
            Articles
          </a>
        </Link>
        <Link href="/recettes">
          <a
            className={`mx-7 text-2xl ${
              router.asPath === "/recettes" && "text-primary-color font-semibold"
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

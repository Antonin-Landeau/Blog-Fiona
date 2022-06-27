import React, { useState } from "react";
import { NextComponentType } from "next";
import Link from "next/link";

import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import instagramIcon from "./../public/social-media-icon/instagram.svg";
import facebookIcon from "./../public/social-media-icon/facebook.svg";
import linkedInIcon from "./../public/social-media-icon/linkedin.svg";

const ResponsiveNav: NextComponentType = () => {
  const router = useRouter();

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
        exit={{ y: "-100vh" }}
        className={`fixed flex flex-col bg-primary-color top-0 bottom-0 right-0 left-0 `}
      >
        <Link href="/">
          <motion.a
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, ease: "easeOut", duration: 0.5 }}
            className={`mx-5 text-2xl mt-16 text-end ${
              router.asPath === "/" && "text-white"
            } `}
          >
            Home
          </motion.a>
        </Link>
        <Link href="/about/me">
          <motion.a
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4, ease: "easeOut", duration: 0.5 }}
            className={`mx-5 text-2xl my-1 text-end ${
              router.asPath === "/about" && "text-white"
            }`}
          >
            About
          </motion.a>
        </Link>
        <Link href="/articles">
          <motion.a
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, ease: "easeOut", duration: 0.5 }}
            className={`mx-5 text-2xl my-1 text-end ${
              router.asPath === "/articles" && "text-white"
            }`}
          >
            Articles
          </motion.a>
        </Link>
        <Link href="/recettes">
          <motion.a
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.6, ease: "easeOut", duration: 0.5 }}
            className={`mx-5 text-2xl my-1 text-end ${
              router.asPath === "/recettes" && "text-white"
            }`}
          >
            Recettes
          </motion.a>
        </Link>
      </motion.nav>
      <div className="flex fixed right-1/2 translate-x-1/2 bottom-10">
        <Link href="https://www.instagram.com/mieuxmangerpourmieuxvivre/">
          <a target="_blanck">
            <motion.div
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, ease: "easeOut", duration: 0.5 }}
              className="hover:cursor-pointer"
            >
              <Image src={instagramIcon} width={50} height={50} />
            </motion.div>
          </a>
        </Link>
        <Link href="https://www.facebook.com/fiona.landeau">
          <a target="_blanck">
            <motion.div
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, ease: "easeOut", duration: 0.5 }}
              className="hover:cursor-pointer"
            >
              <Image src={facebookIcon} width={50} height={50} />
            </motion.div>
          </a>
        </Link>
        <Link href="https://fr.linkedin.com/in/fiona-landeau-1625a1194">
          <a target="_blanck">
            <motion.div
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, ease: "easeOut", duration: 0.5 }}
              className="hover:cursor-pointer"
            >
              <Image src={linkedInIcon} width={50} height={50} />
            </motion.div>
          </a>
        </Link>
      </div>
    </AnimatePresence>
  );
};

export default ResponsiveNav;

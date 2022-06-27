import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SocialMediaNav = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 35, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2, ease: "easeInOut", duration: 0.5 }}
        className="fixed hidden right-0 bottom-1/4 flex-col items-center justify-center w-fit z-10 md:flex"
      >
        <Link href="https://www.facebook.com/fiona.landeau">
          <a
            target="_blanck"
            className="bg-secondary-color p-2 group hover:bg-primary-color transition-all duration-150 ease-in-out"
          >
            <svg
              className=" fill-purple group-hover:fill-creamy-white transition-all duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="35px"
              height="35px"
            >
              {" "}
              <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z" />
            </svg>
          </a>
        </Link>
        <Link href="https://www.instagram.com/mieuxmangerpourmieuxvivre/">
          <a
            target="_blanck"
            className="bg-secondary-color p-2 group hover:bg-primary-color transition-all duration-150 ease-in-out"
          >
            <svg
              className=" fill-purple group-hover:fill-creamy-white transition-all duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="35px"
              height="35px"
            >
              {" "}
              <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
            </svg>
          </a>
        </Link>
        <Link href="https://fr.linkedin.com/in/fiona-landeau-1625a1194">
          <a
            target="_blanck"
            className="bg-secondary-color p-2 group hover:bg-primary-color transition-all duration-150 ease-in-out"
          >
            <svg
              className=" fill-purple group-hover:fill-creamy-white transition-all duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="35px"
              height="35px"
            >
              {" "}
              <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M7.738,17L7.738,17 c-0.697,0-1.262-0.565-1.262-1.262v-4.477C6.477,10.565,7.042,10,7.738,10h0C8.435,10,9,10.565,9,11.262v4.477 C9,16.435,8.435,17,7.738,17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2 S8.551,8.717,7.694,8.717z M16.779,17L16.779,17c-0.674,0-1.221-0.547-1.221-1.221v-2.605c0-1.058-0.651-1.174-0.895-1.174 s-1.058,0.035-1.058,1.174v2.605c0,0.674-0.547,1.221-1.221,1.221h-0.081c-0.674,0-1.221-0.547-1.221-1.221v-4.517 c0-0.697,0.565-1.262,1.262-1.262h0c0.697,0,1.262,0.565,1.262,1.262c0,0,0.282-1.262,2.198-1.262C17.023,10,18,10.977,18,13.174 v2.605C18,16.453,17.453,17,16.779,17z" />
            </svg>
          </a>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default SocialMediaNav;

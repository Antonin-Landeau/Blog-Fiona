import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header";

const AboutPageLayout = ({ children }: any) => {
  const router = useRouter();

  return (
    <div>
      <Header />
      <nav className="mt-16 flex max-w-3xl m-auto lg:mt-20">
        <Link href="/about/me">
          <a
            className={`py-3 flex-1 text-center ${
              router.asPath === "/about/me" && "bg-primary-color text-white"
            }`}
          >
            Biographie
          </a>
        </Link>
        <Link href="/about/dietetique">
          <a
            className={`py-3 flex-1 text-center ${
              router.asPath === "/about/dietetique" &&
              "bg-primary-color text-white"
            }`}
          >
            Dietetique
          </a>
        </Link>
        <Link href={"/about/sophrologie"}>
          <a
            className={`py-3 flex-1 text-center ${
              router.asPath === "/about/sophrologie" &&
              "bg-primary-color text-white"
            }`}
          >
            Sophrologie
          </a>
        </Link>
      </nav>
      <main className="px-5 max-w-3xl m-auto mb-20">{children}</main>
      <Footer />
    </div>
  );
};

export default AboutPageLayout;

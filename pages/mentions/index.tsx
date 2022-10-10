import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import Typography from "../../components/Library/Typography";

const LegalMention = () => {
  return (
    <>
      <Head>
        <title>Mentions Légales</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mt-20 px-5 min-h-full">
        <Typography style="h1" content="Mention Légales" />
        <Typography
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          cupiditate vitae eligendi ut deleniti magnam esse aspernatur laborum!
          Nisi quis tempora voluptatibus, est explicabo cupiditate earum
          exercitationem amet soluta ullam fugit eligendi quaerat error, aliquam
          saepe, deleniti reiciendis quisquam fuga repellendus tempore
          temporibus harum molestiae animi? Veritatis temporibus maiores totam!"
          style="normal"
        />
        <Typography
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          cupiditate vitae eligendi ut deleniti magnam esse aspernatur laborum!
          Nisi quis tempora voluptatibus, est explicabo cupiditate earum
          exercitationem amet soluta ullam fugit eligendi quaerat error, aliquam
          saepe, deleniti reiciendis quisquam fuga repellendus tempore
          temporibus harum molestiae animi? Veritatis temporibus maiores totam!"
          style="normal"
        />
        <Typography
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          cupiditate vitae eligendi ut deleniti magnam esse aspernatur laborum!
          Nisi quis tempora voluptatibus, est explicabo cupiditate earum
          exercitationem amet soluta ullam fugit eligendi quaerat error, aliquam
          saepe, deleniti reiciendis quisquam fuga repellendus tempore
          temporibus harum molestiae animi? Veritatis temporibus maiores totam!"
          style="normal"
        />
      </main>
      <Footer />
    </>
  );
};

export default LegalMention;

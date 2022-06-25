import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import AboutPageSelector from "../../components/AboutPageSelector";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import profilePic from "./../../public/profile-pic.png";

const About = () => {
  const [currentPage, setCurrentPage] = useState<string>("me");
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mt-16">
        <AboutPageSelector
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <article className="px-5 mx-auto">
          {currentPage === "me" && (
            <section>
              <h2 className="text-3xl font-bold text-center py-7">
                Je me présente
              </h2>
              <p className="text-justify my-3 indent-6">
                Je m’appelle LANDEAU Fiona et suis diplômée d’un BTS diététique
                depuis 2018. J’aime apprendre et c’est pourquoi j’ai également
                obtenu par la suite un Diplôme Universitaire en micronutrition
                et suis actuellement en cours de formation pour devenir
                sophrologue.{" "}
              </p>
              <Image src={profilePic} layout="responsive" />
              <p className="text-justify my-3 indent-6">
                Mon objectif premier est de vous permettre de retrouver plaisir
                de manger, grâce à des conseils personnalisés. En effet, mes
                compétences actuelles me permettent d’allier sophrologie et
                diététique, ce qui vous permettra de trouver une manière de vous
                nourrir simple et radicalement différente de vos habitudes :
                manger en pleine conscience.
              </p>
              <p className="text-justify my-3 indent-6"></p>
            </section>
          )}
          {currentPage === "sophro" && (
            <section>
              <h2 className="text-3xl font-bold text-center py-7">
                La Sophrologie
              </h2>
              <p className="text-justify my-3 indent-6">
                La sophrologie est une méthode psychocorporelle utilisée comme
                technique thérapeutique ou vécue comme une philosophie de vie.
                Elle a été conçue par le neuropsychiatre Alfonso Caycedo et est
                inspirée de techniques occidentales comme orientales. Le terme
                SOPHROLOGIE, inspiré du grec ancien*, signifie étude de
                l’harmonisation de la conscience.
              </p>
              <p className="text-justify my-3 indent-6">
                Méthode exclusivement verbale et non tactile, la sophrologie
                emploie un ensemble de techniques qui vont à la fois agir sur le
                corps et sur le mental. Elle combine des exercices qui
                travaillent à la fois sur la respiration, la décontraction
                musculaire et l’imagerie mentale (ou visualisation). Toutes ces
                techniques permettent de retrouver un état de bien-être et
                d’activer tout son potentiel. La sophrologie permet d’acquérir
                une meilleure connaissance de soi et d’affronter les défis du
                quotidien avec sérénité.
              </p>
              <p className="text-justify my-3 indent-6">
                Les inspirations de la sophrologie sont multiples et son
                fondateur a puisé dans des techniques qui existaient déjà dans
                les années 60. Du côté des techniques occidentales qui ont
                inspiré la sophrologie, on retrouve l’hypnose ainsi que les
                techniques de relaxation et de suggestion positive, comme la
                méthode Coué. Alfonso Cayceo s’est également enrichi lors de ses
                voyages en Orient de méthodes orientales comme la méditation, le
                yoga et le zen. Il a fait de cette technique un véritable
                carrefour entre l’Orient et l’Occident.
              </p>
              <p className="text-justify my-3 indent-6">
                A partir de toutes ces inspirations, son fondateur a créé une
                méthode unique et a codifié un ensemble d’exercices de façon
                très claire et précise. Il a défini des exercices de relaxation
                dynamique qui sont des mouvements doux associés à la respiration
                et a mis au point des sophronisations qui sont des
                visualisations guidées par la voix du sophrologue.
              </p>
              <p className="text-justify my-3 indent-6">
                Aujourd’hui, tous les sophrologues possèdent la même boite à
                outils qu’ils mettent à disposition de leurs clients pour
                répondre à leurs différents besoins.
              </p>
            </section>
          )}
          {currentPage === "diet" && (
            <section>
              <h2 className="text-3xl font-bold text-center py-7">
                La diététique
              </h2>
              <p className="text-justify my-3 indent-6">
                A savoir, le terme "nutritionniste" seul n'a, tout comme coach
                en nutrition, ou nutriexpert, aucune valeur ! Le terme de
                nutritionniste peut s’appliquer aux médecins comme aux
                diététiciens. On retrouve donc : Les médecins nutritionnistes :
                Médecins qui ont suivi une formation complémentaire en
                nutrition. Les médecins nutritionnistes sont les seuls à avoir
                un droit de prescription médicale et leurs consultations sont
                remboursées par la Sécurité Sociale.
              </p>
              <p className="text-justify my-3 indent-6">
                Les diététiciens nutritionnistes : Les diététiciens ne sont pas
                médecins. Ils sont des professionnels de santé reconnus par
                l'État, par les articles 7 et 8 de l'ordonnance du 26 août 2005.
                Il est titulaire d'un numéro ADELI, délivré par la Haute
                Autorité de Santé. Les consultations en diététique ne sont pas
                remboursées par la Sécurité Sociale sauf cas très particuliers
                et sur demande d'entente préalable. Elles sont, en revanche,
                prises en charge des mutuelles selon des conditions variables.
              </p>
              <p className="text-justify my-3 indent-6">
                L'ensemble des conseils nutritionnels délivrés sont fondés sur
                des recommandations nationales et internationales en vigueur
                ainsi que sur les résultats des recherches scientifiques.
              </p>
              <p className="text-justify my-3 indent-6">
                Cela vous permet désormais de savoir à qui vous confiez votre
                santé et de vous prémunir de professions aux formations courtes
                et non reconnues !
              </p>
              <p className="text-justify my-3 indent-6">
                Aujourd’hui, il est important de savoir que l'on peut se faire
                aider en cas de problème alimentaires en tout genre et / ou
                problème de poids. En effet si l’on souffre de notre image
                corporelle souffre mais également si on maigrit sans le vouloir,
                si l'on se sent exagérément fatigué en dehors de toute maladie
                car cela peut-être le signe de carences ou que le simple fait
                manger provoque des douleurs ou des troubles (douleurs
                abdominales, intestinales, remontées acides douloureuses,
                diarrhées et/ou constipation persistantes).
              </p>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default About;
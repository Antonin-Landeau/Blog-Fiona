import Head from "next/head";
import React, { ReactElement } from "react";
import AboutPageLayout from "../../components/Layout/AboutPageLayout";
import type { NextPageWithLayout } from "../_app";

const DietetiquePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>A propos | Diététique</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h2 className="text-3xl font-bold text-center py-7">La diététique</h2>
        <p className="text-justify my-3 indent-6 lg:text-lg">
          A savoir, le terme "nutritionniste" seul n'a, tout comme coach en
          nutrition, ou nutriexpert,n'a aucune valeur ! Le terme nutritionniste
          peut s’appliquer aux médecins comme aux diététiciens. On retrouve donc
          : Les médecins nutritionnistes : Médecins qui ont suivi une formation
          complémentaire en nutrition. Les médecins nutritionnistes sont les
          seuls à avoir un droit de prescription médicale et leurs consultations
          sont remboursées par la Sécurité Sociale.
        </p>
        <p className="text-justify my-3 indent-6 lg:text-lg">
          Les diététiciens nutritionnistes : Les diététiciens ne sont pas
          médecins. Ils sont des professionnels de santé reconnus par l'État,
          par les articles 7 et 8 de l'ordonnance du 26 août 2005. Il est
          titulaire d'un numéro ADELI, délivré par la Haute Autorité de Santé.
          Les consultations en diététique ne sont pas remboursées par la
          Sécurité Sociale sauf cas très particuliers et sur demande d'entente
          préalable. Elles sont, en revanche, prises en charge par des mutuelles
          selon des conditions variables.
        </p>
        <p className="text-justify my-3 indent-6 lg:text-lg">
          L'ensemble des conseils nutritionnels délivrés sont fondés sur des
          recommandations nationales et internationales en vigueur ainsi que sur
          les résultats des recherches scientifiques.
        </p>
        <p className="text-justify my-3 indent-6 lg:text-lg">
          Cela vous permet désormais de savoir à qui vous confiez votre santé et
          de vous prémunir de professions aux formations courtes et non
          reconnues !
        </p>
        <p className="text-justify my-3 indent-6 lg:text-lg">
          Aujourd’hui, il est important de savoir que l'on peut se faire aider
          en cas de problème alimentaires en tout genre et / ou problème de
          poids.
        </p>
      </section>
    </>
  );
};

DietetiquePage.getLayout = function getLayout(page: ReactElement) {
  return <AboutPageLayout>{page}</AboutPageLayout>;
};

export default DietetiquePage;

import React, { ReactElement } from "react";
import AboutPageLayout from "../../components/Layout/AboutPageLayout";
import type { NextPageWithLayout } from "../_app";

const DietetiquePage: NextPageWithLayout = () => {
  return (
    <main>
      <h2 className="text-3xl font-bold text-center py-7">La diététique</h2>
      <p className="text-justify my-3 indent-6">
        A savoir, le terme "nutritionniste" seul n'a, tout comme coach en
        nutrition, ou nutriexpert, aucune valeur ! Le terme de nutritionniste
        peut s’appliquer aux médecins comme aux diététiciens. On retrouve donc :
        Les médecins nutritionnistes : Médecins qui ont suivi une formation
        complémentaire en nutrition. Les médecins nutritionnistes sont les seuls
        à avoir un droit de prescription médicale et leurs consultations sont
        remboursées par la Sécurité Sociale.
      </p>
      <p className="text-justify my-3 indent-6">
        Les diététiciens nutritionnistes : Les diététiciens ne sont pas
        médecins. Ils sont des professionnels de santé reconnus par l'État, par
        les articles 7 et 8 de l'ordonnance du 26 août 2005. Il est titulaire
        d'un numéro ADELI, délivré par la Haute Autorité de Santé. Les
        consultations en diététique ne sont pas remboursées par la Sécurité
        Sociale sauf cas très particuliers et sur demande d'entente préalable.
        Elles sont, en revanche, prises en charge des mutuelles selon des
        conditions variables.
      </p>
      <p className="text-justify my-3 indent-6">
        L'ensemble des conseils nutritionnels délivrés sont fondés sur des
        recommandations nationales et internationales en vigueur ainsi que sur
        les résultats des recherches scientifiques.
      </p>
      <p className="text-justify my-3 indent-6">
        Cela vous permet désormais de savoir à qui vous confiez votre santé et
        de vous prémunir de professions aux formations courtes et non reconnues
        !
      </p>
      <p className="text-justify my-3 indent-6">
        Aujourd’hui, il est important de savoir que l'on peut se faire aider en
        cas de problème alimentaires en tout genre et / ou problème de poids. En
        effet si l’on souffre de notre image corporelle souffre mais également
        si on maigrit sans le vouloir, si l'on se sent exagérément fatigué en
        dehors de toute maladie car cela peut-être le signe de carences ou que
        le simple fait manger provoque des douleurs ou des troubles (douleurs
        abdominales, intestinales, remontées acides douloureuses, diarrhées
        et/ou constipation persistantes).
      </p>
    </main>
  );
};

DietetiquePage.getLayout = function getLayout(page: ReactElement) {
  return <AboutPageLayout>{page}</AboutPageLayout>;
};

export default DietetiquePage;

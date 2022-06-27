import React, { ReactElement } from "react";
import AboutPageLayout from "../../components/Layout/AboutPageLayout";
import type { NextPageWithLayout } from "../_app";

const SophroPage: NextPageWithLayout = () => {
  return (
    <main>
      <h2 className="text-3xl font-bold text-center py-7">La Sophrologie</h2>
      <p className="text-justify my-3 indent-6">
        La sophrologie est une méthode psychocorporelle utilisée comme technique
        thérapeutique ou vécue comme une philosophie de vie. Elle a été conçue
        par le neuropsychiatre Alfonso Caycedo et est inspirée de techniques
        occidentales comme orientales. Le terme SOPHROLOGIE, inspiré du grec
        ancien*, signifie étude de l’harmonisation de la conscience.
      </p>
      <p className="text-justify my-3 indent-6">
        Méthode exclusivement verbale et non tactile, la sophrologie emploie un
        ensemble de techniques qui vont à la fois agir sur le corps et sur le
        mental. Elle combine des exercices qui travaillent à la fois sur la
        respiration, la décontraction musculaire et l’imagerie mentale (ou
        visualisation). Toutes ces techniques permettent de retrouver un état de
        bien-être et d’activer tout son potentiel. La sophrologie permet
        d’acquérir une meilleure connaissance de soi et d’affronter les défis du
        quotidien avec sérénité.
      </p>
      <p className="text-justify my-3 indent-6">
        Les inspirations de la sophrologie sont multiples et son fondateur a
        puisé dans des techniques qui existaient déjà dans les années 60. Du
        côté des techniques occidentales qui ont inspiré la sophrologie, on
        retrouve l’hypnose ainsi que les techniques de relaxation et de
        suggestion positive, comme la méthode Coué. Alfonso Cayceo s’est
        également enrichi lors de ses voyages en Orient de méthodes orientales
        comme la méditation, le yoga et le zen. Il a fait de cette technique un
        véritable carrefour entre l’Orient et l’Occident.
      </p>
      <p className="text-justify my-3 indent-6">
        A partir de toutes ces inspirations, son fondateur a créé une méthode
        unique et a codifié un ensemble d’exercices de façon très claire et
        précise. Il a défini des exercices de relaxation dynamique qui sont des
        mouvements doux associés à la respiration et a mis au point des
        sophronisations qui sont des visualisations guidées par la voix du
        sophrologue.
      </p>
      <p className="text-justify my-3 indent-6">
        Aujourd’hui, tous les sophrologues possèdent la même boite à outils
        qu’ils mettent à disposition de leurs clients pour répondre à leurs
        différents besoins.
      </p>
    </main>
  );
};

SophroPage.getLayout = function getLayout(page: ReactElement) {
  return <AboutPageLayout>{page}</AboutPageLayout>;
};

export default SophroPage;

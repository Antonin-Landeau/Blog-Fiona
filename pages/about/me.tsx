import Image from 'next/image'
import React, { ReactElement } from 'react'
import AboutPageLayout from '../../components/Layout/AboutPageLayout'
import type { NextPageWithLayout } from '../_app'

import profilePic from './../../public/profile-pic.png'



const MePage: NextPageWithLayout = () => {
  return (
    <main>
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
  </main>
  )
}

MePage.getLayout = function getLayout(page : ReactElement) {
  return (
    <AboutPageLayout>
      {page}
    </AboutPageLayout>
  )
}

export default MePage
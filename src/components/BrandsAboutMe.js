import React from 'react'
import loadable from '@loadable/component';
import './BrandsAboutMe.scss';
const Carousel = loadable(() => import('../components/Carousel'))


const BrandsAboutMe = () => {
  return (
    <section className="brands brands-aboutme">
      <p>
        Me encanta leer, pero he entendido que notodo está en la teoría,
        sino también en la práctica. He aprendido de la experiencia,
        trabajando en diferentes áreas del marketing, desde estrategias,
        diseño, copywriting, etc. Donde he colaborado junto a equipos de
        grandes marcas nacionales y regionales como: Flor de Caña, Walmart,
        Sinsa, entre otras.
      </p>
      <Carousel />
    </section>
  )
}

export default BrandsAboutMe
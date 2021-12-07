import React from 'react'
import Layout from '/src/components/Layout'
import Hero from '/src/components/Hero'
import Services from '/src/components/Services'
import Different from '/src/components/Different'
import Brands from '/src/components/Brands'
import Articles from '/src/components/Articles'
import Subscribe from '/src/components/Subscribe'
import Contact from '/src/components/Contact'

import './index.css'

export default function Home() {
  return (

    <Layout>
      <main>
        <Hero />
        <Services />
        <Different />
        <Brands />
        <Articles />
        <Subscribe />
        <Contact />
      </main>
    </Layout>

  )
}


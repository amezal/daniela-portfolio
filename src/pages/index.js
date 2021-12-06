import React from 'react'
import Layout from '/src/components/Layout'
import Hero from '/src/components/Hero'
import Services from '/src/components/Services'
import Different from '/src/components/Different'
import Brands from '/src/components/Brands'
import Articles from '/src/components/Articles'
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
      </main>
    </Layout>

  )
}


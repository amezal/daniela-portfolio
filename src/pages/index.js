import React from 'react'
import Layout from '/src/components/Layout'
import Hero from '/src/components/Hero'
import Services from '/src/components/Services'
import Different from '/src/components/Different'
import './index.css'

export default function Home() {
  return (

    <Layout>
      <main>
        <Hero />
        <Services />
        <Different />
      </main>
    </Layout>

  )
}


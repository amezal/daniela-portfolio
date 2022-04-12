import React from 'react';
import Layout from '/src/components/Layout';
import Seo from '/src/components/Seo';
import BannerAboutMe from '../components/BannerAboutMe';
import NoDejes from '../components/NoDejes';
import SoyDaniela from '../components/SoyDaniela';
import BrandsAboutMe from '../components/BrandsAboutMe';
import QuieroCompartir from '../components/QuieroCompartir';
import Contact from '../components/Contact';

function aboutme() {
  return (
    <Layout>
      <Seo title="About Me" description="About Daniela Herrera..." />
      <main className="aboutme">
        <BannerAboutMe />
        <NoDejes />
        <SoyDaniela />
        <BrandsAboutMe />
        <QuieroCompartir />
        <Contact />
      </main>
    </Layout>
  )
}

export default aboutme;
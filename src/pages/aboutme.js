import React from 'react';
import Layout from '/src/components/Layout';
import Seo from '/src/components/Seo';
import BannerAboutMe from '../components/BannerAboutMe';
import NoDejes from '../components/NoDejes';
import SoyDaniela from '../components/SoyDaniela';

function aboutme() {
  return (
    <Layout>
      <Seo title="About Me" description="About Daniela Herrera..." />
      <main className="aboutme">
        <BannerAboutMe />
        <NoDejes />
        <SoyDaniela />
      </main>
    </Layout>
  )
}

export default aboutme;
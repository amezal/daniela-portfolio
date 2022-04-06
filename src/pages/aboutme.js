import React from 'react';
import Layout from '/src/components/Layout';
import Seo from '/src/components/Seo';
import BannerAboutMe from '../components/BannerAboutMe';

function aboutme() {
  return (
    <Layout>
      <Seo title="About Me" description="About Daniela Herrera..." />
      <main className="aboutme">
        <BannerAboutMe />
      </main>
    </Layout>
  )
}

export default aboutme;
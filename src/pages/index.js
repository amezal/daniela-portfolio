import React from 'react'
import Layout from '/src/components/Layout'
import Hero from '/src/components/Hero'
import Services from '/src/components/Services'
import Different from '/src/components/Different'
import Brands from '/src/components/Brands'
import Articles from '/src/components/Articles'
import Subscribe from '/src/components/Subscribe'
import Contact from '/src/components/Contact'
import Seo from '/src/components/SEO'
import './index.css'
import { graphql } from 'gatsby'

export default function Home({ data }) {

  let posts = data.allWpPost.nodes;

  return (
    <Layout>
      <Seo title="Home" description="This is the homepage" />
      <main>
        <Hero />
        <Services />
        <Different />
        <Brands />
        <Articles posts={posts} />
        <Subscribe />
        <Contact />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
query MyQuery {
  allWpPost(limit: 3, sort: {fields: date, order: DESC}) {
    nodes {
      title
      excerpt
      slug
      featuredImage {
        node {
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      id
    }
  }
}
`

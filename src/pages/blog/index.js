import React from 'react'
import Layout from '/src/components/Layout'
import Banner from '/src/components/BannerBlog'
import Seo from '/src/components/Seo'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './blog.scss'


function blog({ data }) {

  function shortenString(str) {
    const maxLength = 150;
    let trimmedString = str.substr(0, maxLength);
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
    return trimmedString + "...";
  }

  const posts = data.allWpPost.nodes;
  //TODO: hacer un query diferente para el primer post
  const latestPost = posts[0];

  return (
    <Layout>
      <Seo title="Blog" />
      <main className="blog">
        {
          data &&
          <>
            <Banner post={latestPost} shortenString={shortenString} />
            <div className="posts">
              {posts.filter((p, i) => i > 0).map(post => (
                <div key={post.id} className="article blog-article">

                  <Link className="readmore" to={`/blog/${post.slug}`}>
                    <GatsbyImage
                      className="featured-img-wrapper"
                      imgClassName="featured-img"
                      image={getImage(post.featuredImage.node.localFile)}
                      width={50}
                      height={50}
                      alt={post.title} />
                  </Link>

                  <Link className="readmore" to={`/blog/${post.slug}`}>
                    <h3>{post.title}</h3>
                  </Link>
                  <p dangerouslySetInnerHTML={{ __html: `${shortenString(post.excerpt)}` }}></p>
                  <Link className="readmore" to={`/blog/${post.slug}`}>Leer más</Link>
                </div>
              ))}
            </div>
          </>
        }

      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date], order: DESC }) {
      nodes {
        title
        excerpt
        id
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
      }
    }
  }
`

export default blog;
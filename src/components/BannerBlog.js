import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './BannerBlog.scss'

const BannerBlog = ({ post, shortenString }) => {
  return (
    <section className="banner-blog">
      <div className="content">
        <div className="nuevopost">
          <p>Nuevo post</p>
        </div>
        <h1>{post.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: `${shortenString(post.excerpt)}` }}></p>
        <Link className="leermas" to={`/blog/${post.slug}`}>
          Leer más
        </Link>
      </div>
      {/* <Link className="readmore" to={`/blog/${post.slug}`}> */}
      <GatsbyImage
        className="banner"
        imgClassName="banner__img"
        image={getImage(post.featuredImage.node.localFile)}
        quality={100}
        alt={post.title} />
      {/* </Link> */}
    </section>
  )
}

export default BannerBlog
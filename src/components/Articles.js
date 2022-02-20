import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby'
import './Articles.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function Articles({ posts }) {

  const myRef = useRef(null);

  useEffect(() => {
    if (myRef.current) {
      myRef.current.scrollLeft = myRef.current.firstChild.offsetWidth + 30;
    }
  }, [myRef]);

  function shortenString(str) {
    const maxLength = 200;
    let trimmedString = str.substr(0, maxLength);
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
    return trimmedString + "...";
  }

  return (
    <section className="articles">
      <h2>Últimos artículos</h2>
      <div className="actual-articles" ref={myRef}>

        {posts.map(post => (
          <div key={post.id} className="article">

            <GatsbyImage
              className="wrapper"
              imgClassName="wrapper-img"
              image={getImage(post.featuredImage.node.localFile)}
              width={50}
              height={50}
              alt={post.title} />

            <h3>{post.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: `${shortenString(post.excerpt)}` }}></div>
            <Link to={`/blog/${post.slug}`}>Leer más</Link>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Articles
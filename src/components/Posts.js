import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactPaginate from 'react-paginate';
import './Posts.scss';

const Items = ({ currentItems, shortenString }) => {
  return (
    <>
      {currentItems &&
        currentItems.map(post => (
          <div key={post.id} className="post">
            <Link className="readmore" to={`/blog/${post.slug}`}>
              <GatsbyImage
                className="img-wrapper"
                imgClassName="img"
                image={getImage(post.featuredImage.node.localFile)}
                width={50}
                height={50}
                alt={post.title} />
            </Link>

            <Link className="readmore" to={`/blog/${post.slug}`}>
              <h3>{post.title}</h3>
            </Link>
            <p dangerouslySetInnerHTML={{ __html: `${shortenString(post.excerpt, post.title.length > 40 ? 60 : 100)}` }}></p>
            <Link className="readmore" to={`/blog/${post.slug}`}>Leer más</Link>
          </div>
        ))}
    </>
  )
}

const Posts = ({ posts, shortenString }) => {

  const [currentPosts, setCurrentPosts] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const postsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + postsPerPage;
    console.log(`Loading posts from ${itemOffset} to ${endOffset}`);
    setCurrentPosts(posts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(posts.length / postsPerPage));
  }, [itemOffset, postsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % posts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="posts">
        {
          <Items currentItems={currentPosts} shortenString={shortenString} />
        }
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Siguiente"
        previousLabel="Anterior"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
      />
    </>
  )
}

export default Posts
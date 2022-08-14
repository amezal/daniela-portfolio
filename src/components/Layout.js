import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import Navbar from './Navbar';
import Footer from './Footer';
import { useStaticQuery, graphql } from 'gatsby';
import './Layout.css';

function Layout({ children }) {

  const [showSearch, setShowSearch] = useState(false);

  function toggleSearch() {
    setShowSearch(!showSearch);
  }


  // useEffect(() => {
  //   document.body.style.overflow = showSearch ? 'hidden' : 'auto'
  // }, [showSearch]);

  const data = useStaticQuery(graphql`{
    allWpPost(sort: {fields: date, order: DESC}) {
      edges {
        node {
          title
          excerpt
          id
          slug
        }
      }
    }
  }
  `)

  return (
    <>
      <div id="fb-root"></div>
      {showSearch && <SearchResults data={data} toggleSearch={toggleSearch} hide={showSearch} />}
      <Navbar toggleSearch={toggleSearch} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
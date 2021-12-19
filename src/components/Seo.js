import React from 'react';
import { Helmet } from 'react-helmet';
//import { useStaticQuery, graphql } from 'gatsby';


function Seo({ title, description }) {
  return (
    <Helmet title={title} meta={[{ name: `description`, content: description }]}>

    </Helmet>
  )
}

export default Seo
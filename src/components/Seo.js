import React from 'react';
import { Helmet } from 'react-helmet';
//import { useStaticQuery, graphql } from 'gatsby';


function Seo({ title, description }) {
  return (
    <Helmet title={title} meta={[{ name: `description`, content: description }]}>
      <script async={true} defer={true} crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0&appId=1232232860643084&autoLogAppEvents=1" />
    </Helmet>
  )
}

export default Seo
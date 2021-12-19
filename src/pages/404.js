import React from 'react';
import Layout from '/src/components/Layout';
import { Link } from 'gatsby';
import './errorpage.css';

function Error() {
  return (
    <Layout>
      <main className="errorpage">
        <h1>Página no encontrada :(</h1>
        <Link to="/">
          <h3>Volver a la página principal</h3>
        </Link>
      </main>
    </Layout>
  )
}

export default Error;
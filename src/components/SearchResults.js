import React, { useEffect, useState } from 'react'
import lunr from 'lunr'
import { Link } from 'gatsby'
import './SearchResults.css'


// https://stackoverflow.com/a/24006120/2255980
// this function will convert the absolute paths that GraphQL gives us 
// into relative paths, which is what Gatsby Link needs.
// so for example 
// this https://localhost:8000/a-post-about-bagels 
// becomes /a-post-about-bagels


// the user must type this many characters before a search will happen
const minCharacters = 3
// we trim the results text to this value, else we dont know how much content 
// we're rendering onto the page
const contentCharLimit = 200

// this builds Lunr's index. It's a necessary step to using Lunr.
// With enormous sites this could become slow, so a future task might be to 
// pre-build the index when Gatsby builds (probably in gatsby-node.js)
// https://lunrjs.com/guides/index_prebuilding.html
function getIndex(posts) {
  return lunr(function () {
    // this line fixes an issue where a search for "bage" will return "bagel" 
    // results (which is good)
    // but a search for "bagel" wont. (it was dropping results for fully 
    // formed queries)
    // https://github.com/olivernn/lunr.js/issues/295#issuecomment-354481360
    this.pipeline.remove(lunr.stemmer)
    this.ref('id')
    this.field('title')
    this.field('body')

    posts.map(post => {
      return this.add({
        id: post.node.id,
        title: post.node.title,
        body: post.node.excerpt,
      })
    })
  })
}

export default function SearchResults({ data, toggleSearch, show }) {

  const {
    allWpPost: { edges: posts }
  } = data


  const [query, setQuery] = useState('') // our search query string

  // getIndex calls lunr to generate the search index
  // we only ever want to run getIndex once, we store its return in state as idx
  const [idx, setIdx] = useState(null)
  useEffect(() => {
    const idx = getIndex(posts)
    setIdx(idx)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let results = []
  if (idx && query && query.length >= minCharacters) {
    // the following will match all documents with words beginning with query:
    // https://lunrjs.com/guides/searching.html
    results = idx.search(`${query}*`)
  }


  return (
    <section className="searchrs">

      <button onClick={toggleSearch}>
        <span></span><span></span>
      </button>

      <div className="modal">

        <div className="searchbar">
          <input
            onChange={e => {
              // list of characters to strip from input, some of these can break lunr
              setQuery(e.target.value.replace(/[|&!*#;$=%^_/?@":~<>()+,]/g, ""))
            }}
            value={query}
            autoComplete='off'
            placeholder="Buscar..."
            name="q"
          />

          <p>
            {query.length < minCharacters && `Escriba al menos ${minCharacters} caracteres`}
            {!!results.length && query.length >= minCharacters && `Mostrando ${results.length} resultados para “${query}”`}
            {!results.length && query.length >= minCharacters && `No se encontraron resultados para “${query}”`}
          </p>
        </div>


        <div className="results">
          {/* ensure the minimum number of characters has been entered */}
          {query.length >= minCharacters &&
            <ul>
              {results.map(o => {

                // Filter through all of the graphql data provided by the parent component
                // to find the ID which matches the results provided by Lunr
                // and just grab the first and only item (it'll be a single item array)
                const post = posts.filter(post => post.node.id === o.ref)[0]

                // content can potentially be long. if it exceeds our contentCharLimit
                // we cap it, and append a ...
                const content = post.node.excerpt
                const contentCapped = `${content?.substring(0, contentCharLimit)}${content?.length > contentCharLimit ? '...' : ''}`

                return (
                  <li key={post.node.id}>
                    <Link to={`/blog/${post.node.slug}`}>
                      <h2>
                        {post.node.title}
                      </h2>

                      {content && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: contentCapped
                          }}
                        />
                      )}

                      <p>{post.node.pathname}</p>

                      <hr />

                    </Link>
                  </li>
                )
              })}
            </ul>
          }

        </div>
      </div>
    </section>
  )

}
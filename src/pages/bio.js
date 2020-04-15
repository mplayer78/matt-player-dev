import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const Bio = ({ data }) => {
  console.log("data from bio ", data)
  const {
    allMarkdownRemark: { edges },
  } = data
  console.log("allMarkdownRemark", edges)
  return (
    <Layout page="bio">
      <Helmet>
        <meta charSet="utf-8" />
        <title>bio</title>
      </Helmet>
      {edges.map(({ node }) => {
        console.log("node", node.excerpt)
        return <h1>Hello</h1>
      })}
      <h1>Hello</h1>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
      filter: { frontmatter: { category: { eq: "bio" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
    sitePage {
      path
      component
      componentChunkName
      componentPath
    }
  }
`

export default Bio

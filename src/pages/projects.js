import React from "react"
import Layout from "../components/layout"
import BlogLink from "../components/blogLink"

const Projects = ({ data }) => {
  const {
    allMarkdownRemark: { edges: projects },
  } = data
  return (
    <Layout>
      {projects.map(({ node }) => (
        <BlogLink key={node.id} post={node} />
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
      filter: { frontmatter: { category: { eq: "project" } } }
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
  }
`

export default Projects

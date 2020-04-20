import React from "react"
import Layout from "../components/layout"
import ProjectLink from "../components/projectLink"

const Projects = ({ data }) => {
  const {
    allMarkdownRemark: { edges: projects },
  } = data
  return (
    <Layout>
      {projects.map(({ node }) => (
        <ProjectLink key={node.id} post={node} />
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
            description
            githubURL
            depolyedURL
          }
        }
      }
    }
  }
`

export default Projects

import React from "react"
import { graphql, Link } from "gatsby"
import BlogLink from "../components/blogLink"
import styled from "styled-components"
import Layout from "../components/layout"

const BlogContainer = styled.div`
  margin: 0 auto;
  width: 900px;
`

const BlogPage = (
  {
    data: {
      allMarkdownRemark: { edges },
    },
  },
  props
) => {
  console.log("edges", edges)
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <BlogLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout uri={props.uri}>
      <BlogContainer>
        <Link>{Posts}</Link>
      </BlogContainer>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
      filter: { frontmatter: { category: { eq: "blog" } } }
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

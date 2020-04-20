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
      <h3>About Me</h3>
      <br />
      <p>
        I’m a software developer from Southwest England where I live with my
        wife & two children. I am proficient in <strong>Javascript</strong>(
        <strong>Node.js</strong> + Client-side), UI frameworks (
        <strong>React</strong>, <strong>Svelte</strong>),
        <strong>Python</strong>, <strong>Java</strong>, <strong>Rust</strong>.
      </p>
      <br />
      <p>
        I have 20 years experience in Retail Management running an independent
        trade store. Within that role I handled day to day liason with retail
        and trade customers so am used to communicating with clients of varying
        levels of technical knowledge.
      </p>
      <br />
      <p>
        I also assist with the _Digital Devon scheme_, providing an IT support
        service to members of the East Devon community.
      </p>
      <br />
      <p>
        In my spare time I am a keen Triathlete and Sailor. I also do coding
        puzzles & games. (Advent of Code, Codewars, etc)
      </p>
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

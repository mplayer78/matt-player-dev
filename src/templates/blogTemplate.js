import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import { StyledHeading, StyledSubHeading } from "../styling/typography"
import Img from "gatsby-image"

const ImageContainer = styled.div`
  flex: 1;
  @media (max-width: 700px) {
    flex: 0;
  }
`

const BlogContainer = styled.div`
  display: flex;
`

const BlogPost = styled.div`
  flex: 4;
`

const BlogBody = styled.div`
  font-family: roboto;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log("data", data)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <BlogContainer>
        <ImageContainer>
          <img src={frontmatter.imgSrc} />
        </ImageContainer>
        <BlogPost>
          <StyledHeading>{frontmatter.title}</StyledHeading>
          <StyledSubHeading>{frontmatter.date}</StyledSubHeading>
          <BlogBody
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </BlogPost>
      </BlogContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

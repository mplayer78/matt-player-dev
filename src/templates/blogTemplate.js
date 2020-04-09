import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import { StyledHeading, StyledSubHeading } from "../styling/typography"
import Img from "gatsby-image"

const ImageContainer = styled.div`
  color: red;
  border: dashed purple 2px;
  flex: 1;
`

const BlogContainer = styled.div`
  display: flex;
`

const BlogPost = styled.div`
  border: solid green 2px;
  flex: 4;
  padding-left: 100px;
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
  // const imgData = useStaticQuery(graphql`
  //   query ImgQuery {
  //     file(relativePath: { in: "nimbot" }, childImageSharp: { fluid: {} }) {
  //       childImageSharp {
  //         fluid {
  //           aspectRatio
  //           base64
  //           sizes
  //           src
  //           srcSet
  //         }
  //       }
  //     }
  //   }
  // `)

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

import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
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
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
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

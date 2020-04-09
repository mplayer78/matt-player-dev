import React from "react"
import styled from "styled-components"

const StyledLinkDiv = styled.button`
  border: none;
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  border: solid red 2px;
  align-items: center;
`

const StyledHeading = styled.h1`
  padding: 50 0;
  margin: 0;
`

const BlogLink = ({ post }) => {
  const { frontmatter } = post
  return (
    <StyledLinkDiv className="blogLink">
      <StyledHeading>{frontmatter.date}</StyledHeading>
      <StyledHeading>{frontmatter.title}</StyledHeading>
    </StyledLinkDiv>
  )
}

export default BlogLink

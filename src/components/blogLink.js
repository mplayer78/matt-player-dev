import React from "react"
import styled from "styled-components"
import {
  StyledSubHeading,
  StyledHeading,
  StyledExcerpt,
} from "../styling/typography"
import { Link } from "gatsby"

const StyledLink = styled.div`
  border: none;
  border-bottom: #828282 solid 2px;
  background: green;
  padding: 50px 0px;
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: none;
  text-decoration: none;
`

const DateBox = styled.div`
  flex: 1;
  font-weight: 400;
`

const ContentBox = styled.div`
  flex: 4;
`

const BlogLink = ({ post, ...props }) => {
  const { frontmatter, excerpt } = post
  console.log("post", post)
  return (
    <StyledLink>
      <DateBox>
        <StyledSubHeading>{frontmatter.date}</StyledSubHeading>
      </DateBox>
      <ContentBox>
        <StyledHeading>{frontmatter.title}</StyledHeading>
        <StyledExcerpt>{excerpt}</StyledExcerpt>
      </ContentBox>
    </StyledLink>
  )
}

export default BlogLink

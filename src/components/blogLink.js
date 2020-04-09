import React from "react"
import styled from "styled-components"
import {
  StyledSubHeading,
  StyledHeading,
  StyledExcerpt,
} from "../styling/typography"

const StyledLinkDiv = styled.button`
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
`

const DateBox = styled.div`
  flex: 1;
  font-weight: 400;
`

const ContentBox = styled.div`
  flex: 4;
`

const BlogLink = ({ post }) => {
  const { frontmatter, excerpt } = post
  return (
    <StyledLinkDiv className="blogLink">
      <DateBox>
        <StyledSubHeading>{frontmatter.date}</StyledSubHeading>
      </DateBox>
      <ContentBox>
        <StyledHeading>{frontmatter.title}</StyledHeading>
        <StyledExcerpt>{excerpt}</StyledExcerpt>
      </ContentBox>
    </StyledLinkDiv>
  )
}

export default BlogLink

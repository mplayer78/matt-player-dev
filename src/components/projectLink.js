import React from "react"
import styled from "styled-components"
import {
  StyledSubHeading,
  StyledHeading,
  StyledExcerpt,
} from "../styling/typography"
import { Link } from "gatsby"

const StyledDiv = styled.div`
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

const StyledLink = styled(Link)`
  text-decoration: none;
`

const DateBox = styled.div`
  flex: 1;
  font-weight: 400;
`

const ContentBox = styled.div`
  flex: 4;
`

const StyledButton = styled.a`
  border: solid #828282 2px;
  color: #4f4f4f;
  font-family: roboto;
  font-weight: 500;
  text-transform: uppercase;
  background: none;
  margin: 0px 20px;
  text-decoration: none;
  padding: 10px;
`

const ProjectLink = ({ post, ...props }) => {
  const { frontmatter, excerpt } = post
  console.log("props", props)
  console.log("frontmatter", frontmatter)
  return (
    <StyledDiv>
      <DateBox>
        <StyledSubHeading>{frontmatter.date}</StyledSubHeading>
      </DateBox>
      <ContentBox>
        <StyledLink to={frontmatter.path}>
          <StyledHeading>{frontmatter.title}</StyledHeading>
          <StyledExcerpt>{frontmatter.description}</StyledExcerpt>
        </StyledLink>
        <StyledButton href={frontmatter.depolyedURL} target="_blank">
          View Deployed App
        </StyledButton>
        <StyledButton href={frontmatter.githubURL} target="_blank">
          View Source Code
        </StyledButton>
      </ContentBox>
    </StyledDiv>
  )
}

export default ProjectLink

import React, { useEffect } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Layout, { GlobalStyle } from "../components/indexLayout"
import SEO from "../components/seo"

import styled from "styled-components"
import MattPlayerText from "../components/mattplayerText"
import { useState } from "react"

const StyledLink = styled(Link)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #f2f2f2;
  text-decoration: none;
  padding: 0 25px;
  transition: color 0.3s;
  transition: opacity 0.3s;
  opacity: ${props => props.opacity};
  &:hover {
    color: #828282;
  }
  &:not(:nth-child(4)) {
    border-right: 4px solid rgba(224, 224, 224, 0.23);
  }
`

const IndexPage = () => {
  useEffect(() => {
    setOpacity(1)
  }, [])
  const [opacity, setOpacity] = useState(0)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <MattPlayerText />
        <div className="linkContainer">
          <StyledLink to="/projects" opacity={opacity}>
            projects
          </StyledLink>
          <StyledLink to="/bio" opacity={opacity}>
            bio
          </StyledLink>
          <StyledLink to="/blog" opacity={opacity}>
            blog
          </StyledLink>
          <StyledLink to="/contact" opacity={opacity}>
            contact
          </StyledLink>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

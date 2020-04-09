/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

import Header from "./header"
import "./layout.css"

const PageDiv = styled.div`
  margin: auto;
  max-width: 900px;
  padding: 0px;
  height: 100vh;
  display: flex;
`

const Container = styled.div`
  margin: auto;
`

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #BDBDBD
  }
`

const IndexLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <PageDiv>
        <Container>
          <main>{children}</main>
        </Container>
      </PageDiv>
    </>
  )
}

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexLayout

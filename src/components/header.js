import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import MattPlayerText from "./mattplayerText"
import { HeaderBar } from "./mattplayerText"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
`

const PageName = styled(HeaderBar)`
  color: #828282;
`

const Header = props => {
  return (
    <StyledHeader>
      <MattPlayerText />
      <PageName>{props.page}</PageName>
    </StyledHeader>
  )
}

export const pageQuery = graphql`
  query {
    sitePage {
      path
    }
  }
`

Header.propTypes = {
  // data.siteTitle: PropTypes.string,
}

Header.defaultProps = {
  // siteTitle: ``,
}

export default Header

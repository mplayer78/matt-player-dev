import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderBar = styled.div`
  /* flex: 1; */
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  padding-top: 75px;
  padding-bottom: 75px;
  a {
    text-decoration: none;
  }
  span:nth-child(1) {
    color: #4f4f4f;
  }
  span:nth-child(2) {
    color: #f2f2f2;
  }
`

const MattPlayerText = props => {
  return (
    <HeaderBar>
      <Link to="/">
        <span>mattplayer</span>
        <span>.dev</span>
      </Link>
    </HeaderBar>
  )
}

export default MattPlayerText

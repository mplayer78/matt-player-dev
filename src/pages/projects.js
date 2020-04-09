import React from "react"
import Layout from "../components/layout"

const Projects = props => {
  console.log("props", props)
  return (
    <Layout uri={props.uri}>
      <h1>Hi from Projects</h1>
    </Layout>
  )
}

export default Projects

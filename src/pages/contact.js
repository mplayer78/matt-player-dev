import React from "react"
import Layout from "../components/layout"

const Contact = props => {
  return (
    <Layout uri={props.uri}>
      <h3>Contact Form</h3>
      <form name="contact" method="POST" data-netlify="true">
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          email:
          <input type="text" />
        </label>
        <label>
          message:
          <textarea />
        </label>
        <label>
          Phone Number:
          <input type="text" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  )
}

export default Contact

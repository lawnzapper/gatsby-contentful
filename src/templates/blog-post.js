import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPost = ({ pageContext, data }) => {
  const {contentfulPost} = data || {}
  const {title, content} = contentfulPost || {}
  return (
  <Layout>
    <h1>{title}</h1>
    <p>{content}</p>
  </Layout>
)}

export const query = graphql`
  query ContentFulPost($slug: String, $locale: String) {
    contentfulPost(path: { eq: $slug }, node_locale: { eq: $locale }) {
      path
      node_locale
      title
    }
  }
`

export default BlogPost

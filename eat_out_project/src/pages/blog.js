import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <StaticQuery
     query= {blogQuery} 
     render={data => {
    return (
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post
           title={node.frontmatter.title}
           author={node.frontmatter.author}
           path={node.frontmatter.path}
           date={node.frontmatter.data}
           body={node.frontmatter.body}
          />
        ))}
      </div>
    )
    }}
    />

  </Layout>
)

const blogQuery = graphql`
query{
  allMarkdownRemark{
  edges{
    node{
      id
      frontmatter{
        title
        data
        author
        path     
      }
      excerpt
    }
  }
 }
}
`

export default Blog

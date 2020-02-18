import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <br></br>
    <h1>BLOG</h1>
    <br></br>
   
     <StaticQuery
     query= {blogQuery} 
     render={data => {
    return (
      <div> 
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post
           key={node.id}
           title={node.frontmatter.title}
           author={node.frontmatter.author}
           slug={node.fields.slug}
           date={node.frontmatter.data}
           body={node.excerpt}
           fluid={node.frontmatter.image.childImageSharp.fluid}
           tags={node.frontmatter.tags}
          />
        ))}
      </div>
    )
    }}
    />
   

  </Layout>
)

const blogQuery = graphql`
query blogQuery{
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}},sort: {fields: frontmatter___data, order: DESC}){
  edges{
    node{
      id
      frontmatter{
        title
        data(formatString: "MMM Do YYYY")
        author
        tags
        type
        image{
          childImageSharp{
            fluid(maxWidth: 600){
              ...GatsbyImageSharpFluid
            }
          }
        }    
      }
      fields{
        slug
      }
      excerpt
    }
  }
 }
}
`

export default Blog

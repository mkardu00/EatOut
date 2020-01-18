import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"
import { Row, Col} from "reactstrap"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <br></br>
    <h1>BLOG</h1>
   <Row>
     <Col md="1"></Col>
     <Col md="10">
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
     </Col>
     <Col md="1"></Col>

   </Row>

  </Layout>
)

const blogQuery = graphql`
query blogQuery{
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}}){
  edges{
    node{
      id
      frontmatter{
        title
        data
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

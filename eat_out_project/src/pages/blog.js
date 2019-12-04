import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"
import { Row, Col} from "reactstrap"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
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
           title={node.frontmatter.title}
           author={node.frontmatter.author}
           path={node.frontmatter.path}
           date={node.frontmatter.data}
           body={node.excerpt}
           fluid={node.frontmatter.image.childImageSharp.fluid}
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
        image{
          childImageSharp{
            fluid(maxWidth: 600){
              ...GatsbyImageSharpFluid
            }
          }
        }    
      }
      excerpt
    }
  }
 }
}
`

export default Blog

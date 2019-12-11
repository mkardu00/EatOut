import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col,Input, Form} from "reactstrap"
import "../styles/split.css"
import { graphql, StaticQuery } from "gatsby"
import Restoran from "../components/Restoran"

const Split = () => (
  <Layout>
    <SEO title="Split" />
    <br></br>
    <Form inline>
      <h1>Restorani u <Input type="text" name="city" id="exampleCity" bsSize="lg" value="Splitu"/></h1>
    </Form>
   

   <br></br>

    <Row>

    
        <Col md="2" id="Split" style={{backgroundColor:'#C0C0C0'}}>
            <div ></div>
        </Col>
        <Col md="10" id="Split" style={{backgroundColor:'#DCDCDC', borderStyle:' 1px solid black'}}>
        <StaticQuery
     query= {blogQuery1} 
     render={data => {
    return (
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Restoran
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
     
    </Row>
    
   
  </Layout>
)
const blogQuery1 = graphql`
query blogQuery1{
  allMarkdownRemark{
  edges{
    node{
      id
      frontmatter{
        title
        data
        author
        tags
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

export default Split

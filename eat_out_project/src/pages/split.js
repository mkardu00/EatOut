import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col} from "reactstrap"
import "../styles/split.css"
import { graphql, StaticQuery } from "gatsby"
import Restoran from "../components/Restoran"

const Split = () => (
  <Layout>
    <SEO title="Split" />
    <br></br>
    <div id="grad">
         
        <h1>RESTORANI U SPLITU</h1>
 
    </div>    
   
    <br></br>
    <Row>
      <Col md="4" id="Split" style={{backgroundColor:'white'}}>
        <div style={{position:'fixed', backgroundColor:'whitesmoke'}} ><h1>fiksni stupac</h1></div>
      </Col>
      <Col md="8" id="Split" style={{backgroundColor:'white', borderStyle:' 1px solid black'}}>
        <StaticQuery
          query= {blogQuery1} 
          render={data => {
           return (
            <div class="card-columns">  
             {data.allMarkdownRemark.edges.map(({ node }) => (
              <Restoran
              key={node.id}
              title={node.frontmatter.title}  
              slug={node.fields.slug}
              body={node.excerpt}
              fluid={node.frontmatter.image.childImageSharp.fluid}
              tags={node.frontmatter.tags}
              type={node.frontmatter.type}
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
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "restoranST"}}}){
  edges{
    node{
      id
      frontmatter{
        title
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

export default Split

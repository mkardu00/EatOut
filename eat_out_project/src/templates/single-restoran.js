import React from "react"
import Layout from "../components/layout"
import { graphql} from "gatsby"
import SEO from "../components/seo"
import {Row, Col, Form,Input, FormGroup,Label,Card} from "reactstrap"
import Img from "gatsby-image"
import "../styles/restoran.css"
import Meni from "./meni"

const SingleRestoran = ({data}) =>{
    const post = data.markdownRemark.frontmatter
    return(
        <Layout>
            <SEO title={post.title}/>
            <Row>
                <Col>
            <br></br>
            
            <div id="grad">   
            <h1>{post.title}</h1>             
             </div>
             <div id="slikaRestorana">
                <Img className="card-image-top" fluid={post.image.childImageSharp.fluid}/>
             </div> 
            
           
              
             
            </Col>
            </Row>
            <Row>
                <Col md = "8" id="opisRestorana">
               
                       <Meni></Meni>
                  
                    <span className="text-info"></span>
                     <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}/>
                </Col>
              
                <Col md = "4" id="rezervacija">   
                <Card>                
                   <div id = "napraviRezervaciju" >
                       <div style={{ textAlign:"center"}}><h5>NAPRAVI REZERVACIJU</h5>
                           </div>
                 
                   <Form>
                   <FormGroup>
                        <Label for="exampleDate">Datum</Label>
                        <Input
                        type="date"
                        name="date"
                        id="exampleDate"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleTime">Vrijeme</Label>
                        <Input
                        type="time"
                        name="time"
                        id="exampleTime"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Broj osoba</Label>
                        <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        </Input>

                    </FormGroup>
                    <div id="rezervirajBotun" >
                    <button className="btn btn-outline-secondary float-left">REZERVIRAJ</button></div>
                    </Form>
                    </div>
                    </Card>
                </Col>
                
            </Row>
        </Layout>
    )
}

export const postQuery = graphql`
    query blogPostBySlugR($slug: String){
        markdownRemark(fields: { slug: { eq: $slug }}){
            id
            html
            frontmatter{
                title
                tags
                image{
                    childImageSharp{
                        fluid(maxWidth: 700){
                            ...GatsbyImageSharpFluid
                         }
                    }
                }
            }
        }
    }
`
export default SingleRestoran
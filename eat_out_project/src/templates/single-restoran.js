import React from "react"
import Layout from "../components/layout"
import { graphql} from "gatsby"
import SEO from "../components/seo"
import {Row, Col, Form,Input, FormGroup,Label} from "reactstrap"
import Img from "gatsby-image"
import "../styles/restoran.css"


const SingleRestoran = ({data}) =>{
    const post = data.markdownRemark.frontmatter
    
    return(
        <Layout>
            <SEO title={post.title}/>
            <Row>
                <Col>
            <br></br>
            
            <div id="grad">
                <Form inline>   
                    <h1>Restorani u <Input type="text" name="city" id="exampleCity"
                     bsSize="lg" value="Splitu" readOnly/></h1>
                </Form>
             </div>
             <div id="slikaRestorana">
                <Img className="card-image-top" fluid={post.image.childImageSharp.fluid}/>
             </div>    
            <br></br>
            </Col>
            </Row>
            <Row>
                <Col md = "8" id="opisRestorana">
                  <h1>{post.title}</h1>
                    <span className="text-info">{post.title}</span>
                     <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}/>
                </Col>
                <Col md = "4" id="opisRestorana">                   
                   <div id = "napraviRezervaciju">
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
                    </Form>
                    </div>
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
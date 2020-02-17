import React from "react"
import Layout from "../components/layout"

import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import "../styles/index.css"
import { Link } from 'gatsby'
import { Input } from 'reactstrap';
import "../styles/pozadina.css"


const IndexPage = (props) => (
  <Layout>
    <SEO title="Pocetna" />
    <BackgroundImage
      className = "masthead"
      fluid={props.data.placeholderImage.childImageSharp.fluid}

    >
      <div className="black-overlay">
        <div className = "content-box">
        <h1 id="naslov">Pronađi restoran u svom gradu </h1> 
        <div id="inputBotun">   
        <div id="unos">
         <Input type="text" name="city" id="exampleCity" bsSize="lg" placeholder="Unesi grad"/>
        </div>
        <Link to={'./split'} className="btn btn-outline-secondary float-right btn-lg">PRETRAGA</Link>
       
      </div>
        </div>
      </div>
      

    </BackgroundImage>
  
  
      
  </Layout>
)



export default IndexPage

export const pageQuery = graphql`
  query{
    placeholderImage: file(relativePath: { eq: "pozadina.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  
  `;

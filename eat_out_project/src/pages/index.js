import React from "react"
import Layout from "../components/layout"

import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import "../styles/index.css"
import { Link } from 'gatsby'
import { Input} from 'reactstrap';
import "../styles/pozadina.css"
import Logo1 from "../components/logo1"
import Logo2 from "../components/logo2"
import { Row, Col} from "reactstrap"






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
     
    
    
      <div className = "clanak">
      <Row>
      <Col sm="6"  ><Logo2 className = "card-img-bottom "></Logo2></Col>
      
      <Col sm="6"><h3 style={{textAlign:`center`, paddingTop:`20%`}}>Restaurants Join Us</h3><br></br>
      <p style={{paddingRight:`2%`}}>
      We love what can happen around the restaurant table. 
      From helping restaurants of all sizes thrive, to enabling diners to find and book the perfect table for every occasion, our story is one of human connection—among diners and restaurants, and between restaurants and their communities. 
      With our passion for hospitality, we take pride in bringing together people and the restaurants they love in the moments that matter.
       Pull up a chair and join us.
       <br></br>
          <br></br>
          <Link to={'./'} className="btn btn-outline-secondary float-right" >PROČITAJ VIŠE</Link>
       </p>
       
        </Col>
      
        </Row>
      
     </div>
     <div className = "clanak">
      <Row>
      
      <Col sm="6"><h3 style={{textAlign:`center`, paddingTop:`20%`}}>Split restaurants: where to eat in Split</h3><br></br><p style={{paddingLeft:`2%`}}>We love eating out in Split! 
        Anytime we travel south, we make a detour to Split just to try out another one of Split restaurants.
         The only problem with restaurants in Split is the constant change: the old favorites changing hands,
          or just losing its charm and quality , and new ones emerging, just to see them changing a 
          chef or a concept and then losing it again or closing permanently
          <br></br>
          <br></br>
          <Link to={'./'} className="btn btn-outline-secondary float-right" >PROČITAJ VIŠE</Link>
          
          </p>
         
          
        </Col>
        <Col sm="6" style={{paddingTop:`1%`}} ><Logo1 className = "card-img-bottom "></Logo1></Col>
        </Row>
      
     </div>
    
    
       
  
  
      
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

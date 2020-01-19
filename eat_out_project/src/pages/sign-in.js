import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/sign-in.css"
import { Row, Col} from "reactstrap"
import SignMeni from "../templates/signeMeni"

const SignIn = () => (
  <Layout>
    <SEO title="Prijava" />
    <div id="pozadina">
    <br></br>
      <br></br>
      <Row>
        <Col md="2" id="prijava">
         <div ></div>
        </Col>

        <Col md="8" id="prijava1" style={{backgroundColor:'white', borderStyle:' 1px solid black'}}>
         <SignMeni></SignMeni>
       
        </Col>
        <Col md="2" id="prijava">
         <div ></div>
        </Col>
       

      </Row>
      <br></br>
      <br></br>
     
      
    
    </div>
  </Layout>
)

export default SignIn

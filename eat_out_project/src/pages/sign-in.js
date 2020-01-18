import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/sign-in.css"
import { Row, Col} from "reactstrap"
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'gatsby'


const SignIn = () => (
  <Layout>
    <SEO title="Prijava" />
    <div id="pozadina">
    <br></br>
      <br></br>
      <Row>
        <Col md="3" id="prijava">
         <div ></div>
        </Col>

        <Col md="6" id="prijava1" style={{backgroundColor:'white', borderStyle:' 1px solid black'}}>
          <Form>
            <h2>Prijavi se:</h2>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
             <Label for="exampleEmail" className="mr-sm-2">Email</Label>
            
             <Input type="email" name="email" id="exampleEmail"/>
            </FormGroup>
           
           <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
             <Label for="examplePassword" className="mr-sm-2">Lozinka</Label>
            
              <Input type="password" name="password" id="examplePassword"/>
           </FormGroup>
           <br></br>
            <Link to={'./sign-in'} className="btn btn-outline-secondary float-left">PRIJAVA</Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            
            <Form>
              <div id="noviKorisnik">
              <h2>Novi korisnik:</h2>
                <a href={'https://www.facebook.com'} className="btn btn-outline-secondary float-center" target="_blank" rel="noopener noreferrer">REGISTRACIJA PUTEM FACEBOOKA</a>
                <br></br>
                 
                 <br></br>
                 <a href={'https://plus.google.com'} className="btn btn-outline-secondary float-center" target="_blank" rel="noopener noreferrer">REGISTRACIJA PUTEM GOOGLEA</a>
                 </div>
            </Form>
           
         </Form>
       
        </Col>
        <Col md="3" id="prijava">
         <div ></div>
        </Col>
       

      </Row>
      <br></br>
      <br></br>
     
      
    
    </div>
  </Layout>
)

export default SignIn

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col} from "reactstrap"
import { Form, FormGroup,Input } from 'reactstrap';


const About = () => (
  <Layout>
    <SEO title="O nama" />
    <Row style={{height: "100vh"}}>
      <Col sm="1"></Col>
      <Col sm="4">
      <p>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <p><br></br><b>Što je EatOut?</b><br></br>EatOut je besplatna platforma koja omogućava rezervacije u Vašim omiljenim restoranima<br>
      </br><br></br></p>
      <b>Kontakt:</b><br></br>
      <p><i class="fa fa-phone"></i> 098/2452456</p>
      <p><i class="fa fa-clock-o"></i> 09:00–17:00</p>
      <p><i class="fa fa-envelope"></i> eatout@gmail.com</p>
    

      </p>
      </Col>
      <Col sm="6">
        <br></br>
        <p><b>Kontaktirajte nas :</b></p>
      <Form>
      <FormGroup>
        <Input  name="password" id="examplePassword" placeholder="Ime" />
      </FormGroup>
      <FormGroup>
        <Input  name="password" id="examplePassword" placeholder="Prezime" />
      </FormGroup>
      
      <FormGroup>
        <Input type="email" name="email" id="exampleEmail" placeholder="E-mail"/>
      </FormGroup>

  
      <FormGroup>
        <Input type="textarea" name="text" placeholder="Poruka" />
      </FormGroup>
    
      <button class="btn btn-outline-secondary float-left">POŠALJI</button>
    </Form>
    <br></br>   
    <br></br>
    <br></br>   
    <br></br>         
      </Col>
      <Col sm="1"></Col>
    </Row>
    
  </Layout>
)


export default About

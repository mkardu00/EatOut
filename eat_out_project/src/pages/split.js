import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col,Input, Form} from "reactstrap"
import "../styles/split.css"

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
           <div><p>Na ovoj stranici nalazit ce se restorani koji se nalaze u splitu</p></div> 
        
        </Col>
     
    </Row>
    
   
  </Layout>
)

export default Split

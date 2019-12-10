import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col} from "reactstrap"
import { Badge } from 'reactstrap';
import "../styles/split.css"

const Split = () => (
  <Layout>
    <SEO title="Split" />
    <br></br>
    <h1>Restorani u <input id="unos" value="Splitu"  ></input></h1>
    
  

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

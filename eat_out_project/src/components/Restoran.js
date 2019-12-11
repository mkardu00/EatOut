import React from "react"
import { Link } from 'gatsby'
import {Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'
import "../styles/restoran.css"
import Img from "gatsby-image"
import { Row, Col} from "reactstrap"

const Restoran = ({title,slug, fluid}) => {
   return(
     <Card>
        <Row>
           <Col md="4">
            <Link to = {slug}>
                <Img className="card-image-top" fluid={fluid} />
            </Link>
            
            <div id="star">  
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
           </Col>
           <Col md="6">
                <CardBody>
                    <CardTitle>
                        <span className="text-info-title1" >{title}</span>
                    </CardTitle>
                    <CardSubtitle>
                         <br></br>
                         <div id = "rezerviraj">
                            <Link to={slug} className="btn btn-outline-secondary float-right">REZERVIRAJ</Link>
                         </div>
                    </CardSubtitle>
                    <CardText>
                       
                      
                    </CardText> 
        
                 </CardBody>
             </Col>
         </Row>
     </Card>
   ) 
}

export default Restoran
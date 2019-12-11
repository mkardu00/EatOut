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
           </Col>
           <Col md="6">
                <CardBody>
                    <CardTitle>
                        <span className="text-info-title1" >{title}</span>
                    </CardTitle>
                    <CardSubtitle>
                         <br></br>
                         <Link to={slug} className="btn btn-outline-secondary float-right">REZERVIRAJ</Link>
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
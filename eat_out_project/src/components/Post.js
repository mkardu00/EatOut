import React from "react"
import { Link } from 'gatsby'
import {Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'
import "../styles/index.scss"
import Img from "gatsby-image"
import { Row, Col} from "reactstrap"


const Post = ({title, author, slug, date, body, fluid, tags}) => {
   return(
    
     <Card>
       <Row>
    <Col sm="6"><Link to = {slug}>
        <Img className="card-image-left"
        style={{height:`50vh`}}
         fluid={fluid}
        
    
    
        />
        </Link></Col>
    
    <Col sm="6">
    

        
        <CardBody>
            <CardTitle>
               
        </CardTitle>
        <CardSubtitle>
        <span className="text-info-title">{title}</span>
        <br></br>
        <span className="text-info">{date}</span> by
        <span className="text-info">{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText> 
        <Link to={slug} className="btn btn-outline-secondary float-right">PROČITAJ VIŠE</Link>
        </CardBody>
        </Col>
        </Row>
    
     </Card>
   ) 
}

export default Post
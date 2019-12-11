import React from "react"
import { Link } from 'gatsby'
import {Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'
import "../styles/restoran.css"
import Img from "gatsby-image"


const Restoran = ({title,slug, body, fluid}) => {
   return(
     <Card>
        <Link to = {slug}>
        <Img className="card-image-top" fluid={fluid}/>
        </Link>
        <CardBody>
            <CardTitle>
            <Link to={slug}>{title}</Link>     
        </CardTitle>
        <CardSubtitle>
        <span className="text-info-title">{title}</span>
        <br></br>
       
        </CardSubtitle>
        <CardText>{body}</CardText> 
        <Link to={slug} className="btn btn-outline-secondary float-right">PROČITAJ VIŠE</Link>
        </CardBody>
     </Card>
   ) 
}

export default Restoran
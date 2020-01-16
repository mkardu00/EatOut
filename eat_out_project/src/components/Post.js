import React from "react"
import { Link } from 'gatsby'
import {Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'
import "../styles/index.scss"
import Img from "gatsby-image"


const Post = ({title, author, slug, date, body, fluid, tags}) => {
   return(
     <Card>
        <Link to = {slug}>
        <Img className="card-image-top" fluid={fluid}/>
        </Link>
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
     </Card>
   ) 
}

export default Post
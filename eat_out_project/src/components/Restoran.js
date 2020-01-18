import React from "react"
import { Link } from 'gatsby'
import {Card, CardTitle, CardText, CardSubtitle, CardBody} from 'reactstrap'
import "../styles/restoran.css"
import Img from "gatsby-image"


const Restoran = ({title,slug, fluid}) => {
   return(
    
    <Link to = {slug}>
            <Card>  
        
           
                <Img className="card-image-top" fluid={fluid} />
            

            <div id="star">  
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                        </div>
           
           
                <CardBody>
                    <CardTitle>
                        <span className="text-info-title1" >{title}</span>
                    </CardTitle>
                    <CardSubtitle>
                         <br></br>
                        
                    </CardSubtitle>
                    <CardText>
                       
                      
                    </CardText> 
        
                 </CardBody>
         
        
     </Card>
     </Link>
    
   ) 
}

export default Restoran
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import { Col} from "reactstrap"
import "../styles/index.scss"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  return (
    <>
     <Col md="12"> 
       <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          <div className="container" id="content"></div>
          <main style={{backgroundColor:"F5F5F5"}}>{children}</main>
          
          <footer  style={{
            fontSize: `60%`,
              height: `30px`,
             
              background: `black`,
              marginBottom: `1.45rem`,
              color: `white`,
              display: "flex",
              justifyContent:"space-between",
              margin: `0 auto`,
              padding: `0px 0rem 0rem`}}
              >
            <div style={{ flex:1, maxWidth: `42px`}}> </div>
            <div style={{ display: "flex", textAlign:"center"}}> EatOut<br></br> © {new Date().getFullYear()} sva prava pridržana</div>
            <div style={{flex:1, maxWidth: `42px`}}></div>  
          </footer>
        
          </Col>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

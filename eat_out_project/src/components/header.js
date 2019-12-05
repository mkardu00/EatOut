import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

const Header = ({ menuLinks, siteTitle }) => (
  <header
    style={{
      background: `white`,
      color: `black`,
      display: "flex",
      justifyContent:"space-between",
      margin: `0 auto`,
      padding: `0px 0rem 0rem`

    }}
  >
     <div style={{ flex:1, maxWidth: `150px`}}>
      <Logo></Logo>
    </div>
      <div>
          <nav>
            <ul style={{ display: "flex"}}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `black`}} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

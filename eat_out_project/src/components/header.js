import PropTypes from "prop-types"
import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import SignIn from "../pages/sign-in"


class Header extends React.Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
    isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" light expand="sm">
          <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">POČETNA</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog">BLOG</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">O NAMA</NavLink>
              </NavItem>
              <NavItem>
                <SignIn></SignIn>
              </NavItem>         
            </Nav>
          </Collapse>
        </Navbar>
       
      </div>
    );
    }
  }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

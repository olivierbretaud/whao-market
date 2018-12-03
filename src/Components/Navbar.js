import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from './../../node_modules/@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="bg-purple" expand="md">
          <NavbarBrand href="/" className="paytone text-light"><h4>Whao Market</h4></NavbarBrand>
          <NavbarToggler onClick={this.toggle}>
            <FontAwesomeIcon icon={faBars} size="lg" color="white"/>
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" className="text-light font-weight-bold">FR</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" className="text-light font-weight-bold">EN</NavLink>
              </NavItem>
             </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
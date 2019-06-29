import React, { Component } from "../../../node_modules/react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
        <MDBNavbarBrand style={{color:'black'}}>
            <strong>NabedHayah</strong>
          </MDBNavbarBrand>
            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
          <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="/" style={{color:'black'}}>Home</MDBNavLink>
              </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/about" style={{color:'black'}}>About</MDBNavLink>
              </MDBNavItem>
                  <MDBNavItem>
              <MDBNavLink to="/Categories" style={{color:'black'}}>Categories</MDBNavLink>
                  </MDBNavItem>
              <MDBNavItem>
                  <MDBNavLink to="/SignIn" style={{color:'black'}}>LogIn</MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
    );
  }
}

export default NavBar;

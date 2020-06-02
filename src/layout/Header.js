import React, {useState, userContext} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav, NavItem, NavLink, NavbarText
} from "reactstrap";

import {Link} from "react-router-dom";
import {UserContext} from "../context/UserContext";

const Header = () => {
  return(
    <Navbar color="info" light expand="md">
       <NavbarBrand>
          <Link to="/" className="text-white">
          Git firebase App
          </Link>
       </NavbarBrand>
       <NavbarToggler/>
       <Collapse navbar>
         <Nav className="ml-auto" navbar>
           <NavItem>
             <NavLink className="text-white">
               Signup
             </NavLink>
           </NavItem>
           <NavItem>
             <NavLink className="text-white">
               Signin
             </NavLink>
           </NavItem>
           <NavItem>
             <NavLink className="text-white">
               Logout
             </NavLink>
           </NavItem>
         </Nav>
       </Collapse>
    </Navbar>
  );
};

export default Header;

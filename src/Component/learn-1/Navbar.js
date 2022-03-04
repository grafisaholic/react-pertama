import React from 'react'
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { NavLink as Link } from 'react-router-dom'


const NavbarHeader = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/day-1" tag={Link}>Day 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/day-2" tag={Link}>Day 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/day-3" tag={Link}>Day 3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/day-4" tag={Link}>Day 4</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/day-5" tag={Link}>Day 5</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/day-6" tag={Link}>Day 6</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarHeader
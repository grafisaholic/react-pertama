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


const NavbarHeader = ({ router }) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            {
              router.map((r) => (
                <NavItem key={r.path}>
                  <NavLink to={r.path} tag={Link}>{r.name}</NavLink>
                </NavItem>
              ))
            }
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarHeader
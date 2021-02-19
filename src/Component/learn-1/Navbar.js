import React, {useState} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap'

const NavbarHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/day-1">Learn Day 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/day-2">Learn Day 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/day-3">Learn Day 3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/day-4">Learn Day 4</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/day-5">Learn Day 5</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarHeader
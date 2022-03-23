import Icon from '@mdi/react'
import React from 'react'
import { mdiInstagram, mdiLinkedin, mdiTwitter } from '@mdi/js'
import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Form,
  FormGroup,
  Input,
  Nav,
  Navbar as NavbarReact,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const toogle = () => setIsOpen(!isOpen)

  return (
    <NavbarReact container={true} light expand="md">
      <NavbarBrand href="/">HotCoffee</NavbarBrand>
      <Form inline>
        <FormGroup>
          <Input type="text" id="blog-search" placeholder="Search" />
        </FormGroup>
      </Form>
      <NavbarToggler onClick={toogle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="ms-auto">
          <NavItem>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/blog" className="nav-link">
              Articles
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/" className="nav-link">
              <Icon path={mdiInstagram} size={1} />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/" className="nav-link">
              <Icon path={mdiTwitter} size={1} />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/" className="nav-link">
              <Icon path={mdiLinkedin} size={1} />
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </NavbarReact>
  )
}

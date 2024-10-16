import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

function NavBar() {
  return (
    <Navbar isBordered='true' className=''>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 uppercase" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className=' hover:text-yellow-400'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Service
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Menu
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>

  )
}

export default NavBar
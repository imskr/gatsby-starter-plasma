import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
// import Toggle from "../dark-mode/Toggle"

const links  = [
  { slug: "/", page: "About", status: false },
  { slug: "/projects", page: "Projects", status: true },
  { slug: "/blog", page: "Blog", status: true },
  { slug: "/contact", page: "Contact", status: false }
]
const NavbarLinks = () => {
  return (
    <>
      {links.map(({slug, page, status}) =>  <NavItem activeStyle={{color: 'var(--textLink'}} partiallyActive={status} to={slug}>{page}</NavItem>)}
    </>
  )
}

export default NavbarLinks



  const NavItem = styled(Link)`
    text-decoration: none;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    transition: all 200ms ease-in;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 80%;
  
    :after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0%;
      content: ".";
      color: transparent;
      background: var(--textLink);
      height: 1px;
      transition: all 0.4s ease-in;
    }
  
    :hover {
      color: var(--textLink);
      ::after {
        width: 100%;
      }
    }
  
    @media (max-width: 768px) {
      margin: 3% 0;
      font-size: 1.2rem;
      z-index: 6;
    }
  `

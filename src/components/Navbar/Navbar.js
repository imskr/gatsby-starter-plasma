import React, { useState } from "react"
import styled from 'styled-components'
import NavbarLinks from "./NavbarLinks"
// import Logo from "./Logo"
// import Social from '../social'

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  position: relative;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 2;
  padding: 0 3vw;
  align-self: center;
  max-width: 1400px;
  
  @media (max-width: 768px) {
    padding: 0 10vw;
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    background-color: var(--bg);
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  transition: left 0.3s;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100vw;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: var(--bg);
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
    height: 92vh;
    background: linear-gradient(190deg, var(--bg) 70%, var(--textNormal) 70%);
  }
`


const Hamburger = styled.div`
  background-color: var(--textNormal);
  width: 30px;
  height: 2px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 30px;
    height: 2px;
    background-color: var(--textNormal);
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation >
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox >
          <NavbarLinks />
          <Social />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar

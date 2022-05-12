import React, { Component } from 'react'
import {Nav, NavItem} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import catlogo from '../assets/catlogo.png'

export default class Header extends Component {
  render() {
    return (
      <Nav className="headerNav">
      <NavItem>
        <NavLink to="/">
          <img src={catlogo} alt="logo for Cat Tinder" className="catlogo" />
        </NavLink>
      </NavItem>
        <NavItem>
          <NavLink to="/catindex" className="nav-link">Meet the Cats</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catnew" className="nav-link">New Cat</NavLink>
        </NavItem>
        <NavItem>
          <a target="blank" href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter" className="nav-link">
            Adopt a Cat
          </a>
        </NavItem>
    </Nav>
    )
  }
}




/* <>
<div className="header">
  <NavLink to="/">Home</NavLink>
  <NavLink to="/catindex">Cat Profiles</NavLink>
  <NavLink to="/catnew">New Cat User</NavLink>
</div>
</> */
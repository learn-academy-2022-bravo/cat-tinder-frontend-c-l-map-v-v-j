import React, { Component } from 'react'
import {Nav, NavItem} from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <Nav className="footerNav">
        <NavItem>
          <NavLink to="/" className="nav-link">
            &copy; Cj & LJ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catindex" className="nav-link">
            Cat Profiles
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catnew" className="nav-link">
            New Cat
          </NavLink>
        </NavItem>
      </Nav>
    )
  }
}







/* <div className="footerNav">
<NavLink to="/">Home</NavLink>
<NavLink to="/catindex">Cat Profiles</NavLink>
<NavLink to="/catnew">New Cat User</NavLink>
</div> */
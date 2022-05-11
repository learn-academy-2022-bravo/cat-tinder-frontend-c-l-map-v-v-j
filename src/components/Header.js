import React, { Component } from 'react'
// import {Nav, NavItem} from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
    <>
    <div className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catindex">Cat Profiles</NavLink>
      <NavLink to="/catnew">New Cat User</NavLink>
    </div>
    </>
    )
  }
}

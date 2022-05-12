import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {NavItem} from 'reactstrap'

export default class CatIndex extends Component {
  render() {
    return (
      <>
        <h3>Cat Index</h3>
        <ul>
          {this.props.cats && this.props.cats.map(cat => {
            return <NavItem><NavLink to={`/catshow/${cat.id}`} key={cat.id}>{cat.name}</NavLink></NavItem>
          })}
        </ul>
      </>
    )
  }
}

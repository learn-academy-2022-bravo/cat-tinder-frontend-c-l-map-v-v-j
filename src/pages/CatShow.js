import React, { Component } from 'react'

export default class CatShow extends Component {
  render() {
    let { cat } = this.props
    return(
      <>
        <h2>Cat Show</h2>
        <p>{cat.name}</p>
        <p>{cat.age}</p>
        <p>{cat.enjoys}</p>
      </>
    )
  }
}

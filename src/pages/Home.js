import React, { Component } from 'react'
import catFiller from '../assets/cat-home-filler.jpg'

export default class Home extends Component {
  render() {
    return (
      <>
      <div>Home</div>
      <h3>Welcome to the Playground</h3>
      <img src={catFiller} height="500px" width="500px" />
    </>
    )
  }
}

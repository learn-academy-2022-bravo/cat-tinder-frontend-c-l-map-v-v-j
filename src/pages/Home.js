import React, { Component } from 'react'
import homeCat from '../assets/homeCat.jpeg'

export default class Home extends Component {
  render() {
    return (
      <div className="body">
        <h1>Welcome to Cat Tinder.....for now</h1>
        <br />
        <br />
        <br />
        <br />
        <img src={homeCat} alt="cute cat in jungle" className="homeCat" />
      </div>
    )
  }
}

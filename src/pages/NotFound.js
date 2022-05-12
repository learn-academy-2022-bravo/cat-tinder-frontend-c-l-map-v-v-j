import React, { Component } from 'react'
import notfoundcat from '../assets/notfoundcat.jpeg'

export default class NotFound extends Component {
  render() {
    return (
      <div className="notfoundcat">
      <h2>Page Not Found</h2>
      <br />
      <br />
      <img src={notfoundcat} alt="lost cat poster" className="notfoundcat" />
      </div>
    )
  }
}

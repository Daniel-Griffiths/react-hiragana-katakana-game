import React, { Component } from 'react'

export default class Character extends Component {
  render() {
    return (
      <div
        style={{
          fontSize: '7em',
          padding: '1rem',
          textAlign: 'center',
          borderRadius: '3px',
          marginBottom: '1rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          background: 'rgba(0,0,0,0.3)',
          fontFamily: 'Lato, sans-serif'
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

import React, { Component } from 'react'
import Button from './Button'

export default class StartButton extends Component {
	render() {
		return (
			<Button 
			onClick={
				()=>alert('hi')
			}
			style={
				{
					display: 'block',
					width: '100%',
				}
			}>Start Game</Button>
		)
	}
}
import React, { Component } from 'react'
import Button from './Button'

export default class StartButton extends Component {
	render() {
		return (
			<Button 
			onClick={
				this.start()
			}
			style={
				{
					display: 'block',
					width: '100%',
				}
			}>Start Game</Button>
		)
	}

	start() {
		return () => alert('test');
	}
}
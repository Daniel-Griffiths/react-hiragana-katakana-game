import React, { Component } from 'react'

export default class Answer extends Component {
	render() {
		return (
			<form>
				<input 
				style={
					{
						width: '100%',
						display: 'block',
						fontSize: '.6em',
						cursor: 'pointer',
						padding: '1em 3em',
						marginBottom: '1em',
						borderRadius: '3px',
						transition: '.3s ease',
						border: '3px solid #fff',
					}
				}
				placeholder="Type the answer and press 'enter'"
				required/>
			</form>
		)
	}
}
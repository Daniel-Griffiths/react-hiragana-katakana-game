import React, { Component } from 'react'

export default class Answer extends Component {
	constructor(props){
		super(props)
		this.state = {
			answer: '',
		}
		this.checkAnswer = this.checkAnswer.bind(this);
	}

	handleChange(e) {
		this.setState({
			answer: e.target.value
		})
	}

	checkAnswer(e) {
		if(e.key === 'Enter'){
			this.props.handler(this.state.answer)
			this.setState({
				answer: ''
			})
		}
	}

	render() {
		return (
			<input 
			value={ this.state.answer }
			onKeyUp={ this.checkAnswer }
			onChange={ this.handleChange.bind(this) }
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
		)
	}
}
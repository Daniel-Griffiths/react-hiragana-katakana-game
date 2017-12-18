import React, { Component } from 'react'
import Button from './Button'

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
		this.props.handler(this.state.answer)
		this.setState({
			answer: ''
		})
	}

	render() {
		return (
			<div style={
				{
					display: 'flex'
				}
			}>
				<input 
				value={ this.state.answer }
				onChange={ this.handleChange.bind(this) }
				style={
					{
					    flexGrow: '1',
						fontSize: '.6em',
						cursor: 'pointer',
					    marginRight: '1em',
						padding: '1em 3em',
						marginBottom: '1em',
						borderRadius: '3px',
						transition: '.3s ease',
						border: '3px solid #fff',
					}
				}
				placeholder="Type the answer here"
				/>
				<Button onClick={ this.checkAnswer }>Submit</Button>
			</div>
		)
	}
}
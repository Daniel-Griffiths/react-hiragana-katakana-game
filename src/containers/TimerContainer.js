import React, { Component } from 'react'

export default class TimerContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			time: 60
		}
	}

	componentDidMount() {
		this.timerID = setInterval(
	      () => this.tick(),
	      1000
	    )
	}

	componentWillUnmount() {
		clearInterval(this.timeID)
	}

	tick() {
		if(this.state.time > 0){
			this.setState({
				time: this.state.time - 1
			})
		}
	}

	render() {
		return <div>{this.state.time}</div>
	}
}
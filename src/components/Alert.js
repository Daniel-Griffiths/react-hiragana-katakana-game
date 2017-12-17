import React, { Component } from 'react'

export default class Alert extends Component{
	constructor(props){
		super(props)
	}

	render(){
		const background = {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			display: 'flex',
			position: 'fixed',
			alignItems: 'center',
			justifyContent: 'center',
			background: 'rgba(0,0,0,0.5)',
		}

		const alert = {
			color: '#000',
			padding: '1em',
			background: '#fff',
			textAlign: 'center',
			borderRadius: '3px',
			boxShadow: '0 1px 5px 0 rgba(0,0,0,0.3)',
		};

		return(
			<div>
				{ this.props.active == true ? 
					<div style={background}>
						<div style={alert}>
							<strong>test</strong>
							<div>{ this.props.children }</div>
						</div>
					</div>
					: null
				}
			</div>
		)
	}
}
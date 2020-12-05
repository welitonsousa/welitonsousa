import React, { Component } from 'react';
import './TextMenu.css'

export class Text extends Component {
	render(props) {
		return (
			<div>
				<h3 className='Title'>
					{this.props.children}
				</h3>
			</div>
		)
	}
}

export class TextMenuBody extends Component {
	render(props) {
		return (
			<div style={{fontSize: this.props.size ? this.props.size : 18, marginTop: this.props.marginTop ? '1pc': ''}}>
				<p className='Menu-text'>
					{this.props.children}
				</p>
			</div>
		)
	}
}
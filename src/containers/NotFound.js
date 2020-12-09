import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
	render() {
		return <div className="container">
			<div class="text-center">
				<h3>Not found!</h3>
				<Link to='/' className="ui button">Home</Link>
			</div>
		</div>
	}
}

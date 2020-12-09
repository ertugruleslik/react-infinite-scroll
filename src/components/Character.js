import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react'

const Character = ({ image, name, id }) => (
	<Card
		image = {image}
		header = {name}
		extra={
			<Link to={`detail/${id}`}><Button content='Show More' /></Link>
		}
	/>
);

Character.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.number
};

export default Character;

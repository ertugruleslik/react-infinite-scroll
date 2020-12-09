import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ image, name, location, episodes }) => (
	<div className="detail">
		<div className="image-content">
			<img src={image} className="ui medium rounded image" alt={name} />
		</div>
		<div className="ui segment">
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				<p className="card-text">
					<strong>Birthday:</strong> {location && location.name}
				</p>
				<div>
					{episodes.length > 0 && (
						<>
							<strong>Last Episodes:</strong>
							<ul className="ui bulleted list">
								{episodes.map(res => (
									<li key={res.id}>{res.name}</li>
								))}
							</ul>
						</>
					)}
				</div>
			</div>
		</div>
	</div>
);

CharacterDetail.defaultProps = {
	episodes: []
};

CharacterDetail.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	location: PropTypes.objectOf(PropTypes.string),
	episodes: PropTypes.array
};

export default CharacterDetail;

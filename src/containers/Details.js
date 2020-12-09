import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCharacter, getEpisode } from '../store/character/actions';
import CharacterDetail from '../components/CharacterDetail';

const Details = (props) => {

	const { info, episodes } = props;

	useEffect(() => {
		const { id } = props.match.params;
		props.getCharacter(id).then(res => {

			let episodesArray = selectEpisodes(res.episode);
			props.getEpisode(episodesArray);
		});

	}, []);

	const selectEpisodes = data => {
		let episodesList = [];
		data.map((res, i) => {
			if (i <= 4) {
				let ids = res.split('episode/')[1];
				episodesList.push(Number(ids));
			}
		});
		return JSON.stringify(episodesList);
	};


	return (
		<div className="container">
			<button className="ui button" onClick={() => props.history.goBack()}>Back</button>
			<CharacterDetail {...info} episodes={episodes} />
		</div>
	);

}

Details.defaultProps = {
	info: {},
	episodes: []
};

Details.propTypes = {
	episodes: PropTypes.array
};

const mapStateToProps = state => ({
	info: state.character.info,
	episodes: state.character.episodes
});

const mapDispatchToProps = {
	getCharacter,
	getEpisode
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Details));

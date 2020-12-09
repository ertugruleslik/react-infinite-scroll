import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Character from '../components/Character';
import Loader from '../components/Loader';
import { Grid } from 'semantic-ui-react'
import { getCharacterList } from '../store/character/actions';

const Home = (props) => {

	const [page, setPage] = useState(1);

	const { results, loading } = props;

	useEffect(() => {
		props.getCharacterList({page: page});

		window.addEventListener("scroll", handleScrolle)
		return () => window.removeEventListener("scroll", handleScrolle)

	}, [page]);

	const handleScrolle = () => {
		if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
			setPage(prev => prev + 1);
		}
	};

	return (
		<div className="container">
			<div className="items">
				<Grid>
					<Grid.Row columns={4}>
						{ results.map((res, index) =>
							<Grid.Column key={index} ><Character {...res} /></Grid.Column>
						)}
					</Grid.Row>
				</Grid>
				{loading && (
					<div className="text-center">
						<Loader />
					</div>
				)}
			</div>
		</div>
	);

}

const mapStateToProps = state => ({
	results: state.character.data,
	loading: state.character.loading
});

const mapDispatchToProps = {
	getCharacterList
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

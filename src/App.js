import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './containers/Home';
import Details from './containers/Details';
import NotFound from './containers/NotFound';
import { store } from './store/store';

import 'semantic-ui-css/semantic.min.css'
import './App.css';


const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={ Home } />
				<Route path="/detail/:id" component={ Details } />
				<Route component={ NotFound } />
			</Switch>
		</BrowserRouter>
	</Provider>
);

export default App;

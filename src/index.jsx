import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App.jsx';

import 'bootswatch/dist/sandstone/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
	<App />
	</BrowserRouter>,

	document.getElementById('root')
	);

registerServiceWorker();


import React, { Component, PropTypes } from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom';

import './App.css';
import 'bootswatch/dist/sandstone/bootstrap.css';

import ScrollDown from './Components/ScrollDown/scrolldown.js';
import Navbarapp from './Components/Containers/navbar/navbar.js';
// import Item from './Components/Containers/items/items.js';
// import ItemsList from './Components/Containers/items/itemslist.js';
import Createform from './Components/Forms/Button/button.js';
import Welcome from './Components/Containers/welcome/welcome.js';
import Main from './Components/Containers/main/main.js';
import Bottom from './Components/Containers/footer/footer.js';
import Routes from './routes.js';


class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <Navbarapp />
        <Routes/>
        <Bottom/>
      </div>
    );
  }
}


export default App;

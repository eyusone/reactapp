import React, { Component, PropTypes } from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom';

import './App.css';
import 'bootswatch/dist/sandstone/bootstrap.css';

import ScrollDown from './Components/ScrollDown/scrolldown.jsx';
import Navbarapp from './Components/Containers/navbar/navbar.jsx';
// import Item from './Components/Containers/items/items.jsx';
// import ItemsList from './Components/Containers/items/itemslist.jsx';
import Createform from './Components/Forms/Button/button.jsx';
import Welcome from './Components/Containers/welcome/welcome.jsx';
import Main from './Components/Containers/main/main.jsx';
import Bottom from './Components/Containers/footer/footer.jsx';
import Routes from './routes.jsx';


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

import React, {Component} from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
var history = require('connect-history-api-fallback');
//import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.css';
//import './routes.css';
import 'bootswatch/dist/sandstone/bootstrap.css';

import ScrollDown from './Components/ScrollDown/scrolldown.js';
import Navbarapp from './Components/Containers/navbar/navbar.js';
//import Item from './Components/Containers/items/items.js';
//import ItemsList from './Components/Containers/items/itemslist.js';
import Createform from './Components/Forms/Button/button.js';
import Welcome from './Components/Containers/welcome/welcome.js';
import Main from './Components/Containers/main/main.js';
import Bottom from './Components/Containers/footer/footer.js';
import News from './Components/Containers/news/news.js';
//import NewsBlock from './Components/Containers/news/newsblock.jsx';
import LoaderComponent from './Components/Containers/ex/example.js';
import Mainpage from './Components/Containers/main/mainpage.js';


const Routes = () => (

  <Switch>
  <Route exact path='/' component={LoaderComponent}/>
  <Route path='/main' component={Mainpage(Main)} />
  <Route path='/news/:id' component={Mainpage(News)}/>
  <Route path='/ex' component={LoaderComponent}/>

  </Switch>
  )

export default Routes;

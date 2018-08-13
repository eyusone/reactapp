import React, {Component} from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
//import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.css';
//import './routes.css';
import 'bootswatch/dist/sandstone/bootstrap.css';

import ScrollDown from './Components/ScrollDown/scrolldown.jsx';
import Navbarapp from './Components/Containers/navbar/navbar.jsx';
//import Item from './Components/Containers/items/items.jsx';
//import ItemsList from './Components/Containers/items/itemslist.jsx';
import Createform from './Components/Forms/Button/button.jsx';
import Welcome from './Components/Containers/welcome/welcome.jsx';
import Main from './Components/Containers/main/main.jsx';
import Bottom from './Components/Containers/footer/footer.jsx';
import News from './Components/Containers/news/news.jsx';
import NewsBlock from './Components/Containers/news/newsblock.jsx';
import LoaderComponent from './Components/Containers/ex/example.jsx';
import Mainpage from './Components/Containers/main/mainpage.jsx';


const Routes = () => (

  <Switch location = {location}>
  <Route exact path='/public' component={LoaderComponent}/>
  <Route path='/public/main' component={Mainpage(Main)}/>
  <Route path='/public/news/:id' component={NewsBlock} />
  <Route path='/public/news' component={Mainpage(News)}/>
  <Route path='/public/ex' component={LoaderComponent}/>
  </Switch>
  )

export default Routes;

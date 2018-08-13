import React, {Component} from 'react';
//import './welcome.css';
import ScrollDown from '../../ScrollDown/scrolldown.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Welcome extends React.Component {
    render() {
        return (
      <section id = "welcome" style = {{backgroundImage: 'url("http://www.sdjgjx.com/up/pc/background%20hd.jpg")',
          backgroundSize: 'cover' 
          }} className = "fill-viewport">
      <div className = "back fill-viewport">
        <div className = "container" >
            <div className = "row fill-viewport align-items-center">
              <div className = "col-12 justify-content-center" >
              <h2 className = 'text-white'>Welcome to Page!</h2>
             <ScrollDown/>   
              </div>
            </div>
           </div>
          </div>
          </section>
     )
    }
}

export default Welcome;

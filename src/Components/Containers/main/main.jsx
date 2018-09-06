import React, {Component} from 'react';
import 'bootswatch/dist/sandstone/bootstrap.css';
//import ItemsList from '../items/itemslist.jsx';
import {Link} from 'react-router-dom';
import Val from '../val/val.jsx'

class Main extends React.Component {
      constructor(props) {
      super(props);
      }

    render() {
          const style = {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          };

          const namepaper = ['Обо мне', 'Данное приложение', 'APP.COM'];

        return (
          <section id = "main" className="main-viewport bg-dark" name = "main" >
          <div className = "container">

            <div className = "row align-items-start justify-content-start pt-3"  >
              <div className = "col-10 col-md-10 col-xl-10 col-sm-10 bg-light"
              style = {{padding: '3%', textAlign: 'center', boxShadow: '10px 8px 20px -3px'}} >
          <Val namepaper = {namepaper[0]} text = {'k'}/>
           </div>
              </div>

              <div className = "row align-items-start justify-content-end mt-3"  >
              <div className = "col-10 col-md-10 col-xl-10 col-sm-10 bg-light"
              style = {{padding: '3%', textAlign: 'center', boxShadow: '10px 8px 20px -3px'}} >
          <Val namepaper = {namepaper[1]} text = {'k'}/>
           </div>
              </div>

              <div className = "row align-items-start justify-content-start mt-3"  >
              <div className = "col-10 col-md-10 col-xl-10 col-sm-10 bg-light mb-3"
              style = {{padding: '3%', textAlign: 'center', boxShadow: '10px 8px 20px -3px'}} >
          <Val namepaper = {namepaper[2]} text = {'k'}/>
           </div>
              </div>
            </div>
          </section>
        )
    }
}

export default Main;

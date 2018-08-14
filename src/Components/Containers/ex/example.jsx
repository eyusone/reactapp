import React, { Component } from 'react';
import './example.css';
import {Link} from 'react-router-dom';
import Main from '../main/main.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class LoaderComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
        loading: true,
        load: true
      }
      }

       componentDidMount() 
       {  
         setTimeout(
            () => {
                this.setState({loading: false})
            }, 1000
            )
       }

   render()
   {        
    const style = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    };

    let page = this.props.location.pathname.substr(1);

    let HTMLCode = 
                    <div>
                    <h1>My name is Vasya! I want to work an big company!</h1>
                    <button type="button" 
                    className="btn btn-secondary btn-primary"
                    style = {{fontSize: '15px'}}>
                    <Link to='/public/main' className = "text-white">More <img src = 'img/next.png'/></Link>
                    </button>                    
                    </div>;

    let data = this.state.loading ? <img src = '../../../../public/img/91.gif' style = {style}/> : 
        HTMLCode

    return(

        <section id = "ex"  name = "ex" className = "main-viewport">
        <div className = "container">
                <div className = "row align-items-center main-viewport">
                    <div className = "col-12 col-md-12 col-xl-12 col-sm-12" style = {{
                        fontFamily: '"Prata", serif',
                        textAlign: 'center',
                        }}>
            {data}
            </div>
                </div>
                </div>

        </section>
        
      )
   }
}
import React, {Component} from 'react';

import { NavLink, Switch, Route } from 'react-router-dom';
import 'bootswatch/dist/sandstone/bootstrap.css';

class News extends React.Component {
    componentDidMount() {
        console.log("begin");
    }

    constructor(props) {
        super(props);
    }

    render() {
        const id = this.props.match.params.id;
        //const img = this.props.text;
        const names = ['Данное приложение','APP.COM','Обо мне'];
        const imgs = [];
        const urls = ['http://dxxx.netlify.com', 'http://dyyy.netlify.com', 'https://kazan.hh.ru/resume/c72d1cb8ff05b128480039ed1f72566f6f344c']

      let section = (
        <section id = "news" className="main-viewport bg-dark" name = "news">
          <div className = "container">
            <div className = "row justify-content-between pt-3 main-viewport pb-3">
              <div className = "col-12 col-md-12 col-xl-12 col-sm-12 bg-light" style = {{padding: '3%', boxShadow: '10px 8px 20px -3px'}}>

                {names.map((item, index)=>{if (id == index+1) {
                  return (<h1>{item}</h1>)}})}

                <div className='row'>
                  <div className='col-12'>

                  </div>
                </div>
                {urls.map ((item,index)=> {if (id == index+1) {
                  return (<p>Ссылка: <a href = {item}> {item}</a></p>)
                }})}

              </div>
            </div>
          </div>
        </section>
      );
      return section
    }
}

export default News;

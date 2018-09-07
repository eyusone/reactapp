import React, {Component} from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import './news.css'

class News extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const id = this.props.match.params.id;
        const names = ['Данное приложение','APP.COM','Обо мне'];
        const imgs = ['/public/img/screen.png', '/public/img/screen2.png'];

        const describe = [
          'Node.js (менеджер пакетов npm)',
          'ReactJS',
          'React Router', 'react-scroll', 'Верстка с помощью bootstrap',
          'reactstrap',
          'Сборка приложения проводилась с помощью webpack4'
        ];

        const wrdesc = [
          'Это приложение своего рода визитка.'
        ];

        const urls = ['http://dxxx.netlify.com', 'http://dyyy.netlify.com',
          'https://kazan.hh.ru/resume/c72d1cb8ff05b128480039ed1f72566f6f344c'
        ];

      let section = (
        <section id = "news" className="main-viewport bg-dark" name = "news">
          <div className = "container">
            <div className = "row justify-content-between pt-3 main-viewport pb-3">
              <div className = "col-12 col-md-12 col-xl-12 col-sm-12 bg-light" style = {{padding: '3%', boxShadow: '10px 8px 20px -3px'}}>

                <div className='row justify-content-start pb-3'>
                  <div className='col-12'>
                    {names.map((item, index)=>{if (id == index+1) {
                      return (<h1 className='display-4'>{item}</h1>)
                    }})}
                  </div>
                </div>

                <div className='row justify-content-start pb-3'>
                  <div className='col-12 mb-3'>
                      <ul style = {{padding: '0'}}>
                        <h2>App stack:</h2>
                          {
                              describe.map((item, index)=>{
                                return (<li style = {{padding: '3px', marginLeft: '20px'}}>{item}</li>)
                              })
                          }
                      </ul>

                  </div>
                  <div className='col-12'>
                    <p>{wrdesc.map((item, index)=>{if (id == index+1) {
                      return item
                    }})}</p>
                  </div>

                </div>

                <div className='row justify-content-start pb-3'>
                    <div className='col-9'>
                      {imgs.map((item, index)=>{if (id == index+1) {
                        return (<img src = {item} className='img-adaptive'/>)
                      }})}
                    </div>
                </div>

                <div className='row justify-content-start pb-3'>
                  <div className='col-9'>
                {urls.map ((item,index)=> {if (id == index+1) {
                  return (<p>Ссылка: <a href = {item}> {item}</a></p>)
                }})}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      );
      return section
    }
}

export default News;

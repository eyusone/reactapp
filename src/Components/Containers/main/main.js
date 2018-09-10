import React, { Component } from 'react';
import 'bootswatch/dist/sandstone/bootstrap.css';

import { Link } from 'react-router-dom';
import Val from '../val/val.js';

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

    const namepaper = ['Обо мне', 'APP.COM', 'Данное приложение'];

    return (
      <section id = 'main' className='main-viewport bg-dark' name = 'main' >
        <div className = 'container'>

          <div className = 'row align-items-start justify-content-start'  >
            <div className = 'col-7 col-md-7 col-xl-7 col-sm-7 bg-light mt-3'
              style = {{ padding: '3%', textAlign: 'center', boxShadow: '10px 8px 20px -3px' }}
            >
              <Val id = '1' namepaper = {namepaper[2]} text = {'Это простое React-приложение, базированное на React, создано для отображения данных обо мне и о моих проектах. Весь стек проектов можно узнать, кликнув по кнопке подробнее (в частности, например для скроллинга использовалась библиотека react-scroll).'}/>
            </div>
          </div>

          <div className = 'row align-items-start justify-content-end mt-3'  >
            <div className = 'col-7 col-md-7 col-xl-7 col-sm-7 bg-light'
              style = {{ padding: '3%', textAlign: 'center', boxShadow: '10px 8px 20px -3px' }}
            >
              <Val id = '2' namepaper = {namepaper[1]} text = {'Данное приложение с помощью кроссдоменного запроса к API (https://www.football-data.org) выводит в режиме реального времени футбольную табличку, а также парся данные с локального сервера выводит график команды в течении чемпионата. '}/>
            </div>
          </div>

          <div className = 'row align-items-start justify-content-start pt-3'  >
            <div className = 'col-7 col-md-7 col-xl-7 col-sm-7 bg-light mb-3'
              style = {{ padding: '3%', textAlign: 'center', boxShadow: '10px 8px 20px -3px' }}
            >
              <Val id = '3' namepaper = {namepaper[0]} text = {'Закончил университет в 2017 году, кафедрой была связана с математикой и вычислениями, ввиду этого велась параллельная работа над собой в качестве Frontend\'a .'} />
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Main;

import React, { Component } from 'react';
import 'bootswatch/dist/sandstone/bootstrap.css';

class Bottom extends React.Component {
  render() {
    return (

      <section id = 'bottom' className='bg-primary footer-viewport' name = 'bottom'>
        <div className = 'container'>
          <div className = 'row align-items-center'>
            <div className = 'col-12 justify-content-center col-md-6' >
              <ul className='list-unstyled text-white' >
                <li style = {{ paddingTop: '3%' }}><h6>О мне</h6></li>
                <li>Привет, меня зовут Эмиль!
                  Справа можно увидеть ссылки в социальных сетях.</li>
              </ul>
            </div>
            <div className = 'col-12 justify-content-center col-md-6' >

              <a href = 'http://vk.com' ><img src = 'http://pngimg.com/uploads/vkontakte/vkontakte_PNG24.png' style = {{
                width: '120px'
              }}/></a>

              <a href = 'http://instagram.com'><img src = 'http://pngimg.com/uploads/instagram/instagram_PNG11.png' style = {{
                width: '53px'
              }}/></a>

              <a href = 'http://twitter.com'><img src = 'http://pngimg.com/uploads/twitter/twitter_PNG34.png' style = {{
                width: '59px', marginLeft: '6%'
              }}/></a>

            </div>
          </div>
        </div>
      </section>);
  }
}

export default Bottom;

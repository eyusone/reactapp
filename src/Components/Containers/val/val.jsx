import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Val extends React.Component {
    render() {

    return (
    <div className = "container">
        <div className = "row align-items-start">
            <div className = "col-6">
                <img src = "img/cr7.jpg" style = {{borderRadius: '50%', width: '150px', height: '125px'}}/>
            </div>
            <div className = "col-6">
                <div style = {{fontFamily: '"Prata", serif',
                        textAlign: 'left'}}>
            
                        <h1>kek</h1>
                        <p>Создатели компонентов высшего порядка
Зачастую у вас есть несколько компонентов, которые вам надо обернуть, добавив одинаковое поведение. Это очень похоже на наш пример с оборачиванием функций add и subtract для логирования.

Предположим, в вашем приложении есть объект, содержащий информацию о текущем пользователе, вошедшем в систему. Вам нужно, чтобы некоторые компоненты React получили доступ к этой информации, но вместо того, чтобы просто предоставить такой доступ сразу всем компонентам, вы хотите сделать это выборочно.

Это решается путем создания функции, которую мы можем вызвать вместе с компонентом React. Функция будет возвращать новый компонент React, который выведет переданный компонент, добавив ему дополнительное свойство, предоставляющее доступ к информации пользователя.

Это звучит несколько сложно, проще показать на примере кода</p>
                        <Link to = '/public/ex' className = "btn btn-secondary btn-primary">Back</Link>
                        <Link to = '/public/news' className = "btn btn-secondary btn-primary ml-2" style = {{float:'right'}}>Go to news</Link>
                </div>
            </div>
        </div>
    </div>
);
}
}

export default Val;

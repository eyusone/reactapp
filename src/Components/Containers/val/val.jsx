import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Val extends React.Component {
    render() {
    return (
    <div className = "container">
        <div className = "row align-items-start">
            <div className = "col-12 col-md-12 col-xl-12">
                <div style = {{fontFamily: '"Prata", serif',
                        textAlign: 'left'}}>

                        <h1>{this.props.namepaper}</h1>
                        <p>{this.props.text}</p>

                        <Link to = '/news' className = "btn btn-secondary btn-primary ml-2" style = {{float:'right'}}>Подробнее</Link>
                </div>
            </div>
        </div>
    </div>
);
}
}
export default Val;

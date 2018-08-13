import React, {Component} from 'react';

import { NavLink, Switch, Route } from 'react-router-dom';
import 'bootswatch/dist/sandstone/bootstrap.css';
import Routes from '../../../routes.jsx';

const text = [
{id: 1, property: "First", info: "New"},
{id: 2, property: "Second", info: "Old"},
{id: 3, property: "Third", info: "Boy"}
];

class News extends React.Component {
    componentDidMount() {
        console.log("begin");
    }

    constructor(props) {
        super(props);
    }

    render() {
        const id = this.props.match.params.id;
        const property = this.props.match.params.property;

        return (
        <section id = "news" className="main-viewport bg-dark" name = "news">
            <div className = "container">
                <div className = "row justify-content-between pt-3 main-viewport pb-3">
                    <div className = "col-12 col-md-12 col-xl-12 col-sm-12 bg-light" style = {{padding: '3%', boxShadow: '10px 8px 20px -3px'}}>
                    kek <br/>
                    {text.map(function(item){ 
                            return <NavLink key={item.id} to={`/public/news/${item.id}`}>{item.property}</NavLink>
                            })
                    }
                    <br/>
                    </div>
                </div>      
            </div>
        </section>
        )
    }
}

export default News;

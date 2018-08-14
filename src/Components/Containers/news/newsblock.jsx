import React, {Component} from 'react';
import { NavLink, Switch, Route, Redirect, Link } from 'react-router-dom';
import 'bootswatch/dist/sandstone/bootstrap.css';
import Routes from '../../../routes.jsx';

const text = [
{id: 1, property: "First", info: "New"},
{id: 2, property: "Second", info: "Old"},
{id: 3, property: "Third", info: "Boy"}
];

class NewsBlock extends React.Component {

    render() {
        const id = this.props.match.params.id;
        let texting;

        for(var i=0; i<text.length; i++) {
           if(text[i].id==id) {
            texting = text[i];
            break;
        }
    }
    if(texting===undefined)
    {
        return (
            <div>
            ERROR!
            </div>
            )
    }
    else {
        return (
            <section id = "news" className="main-viewport" name = "news">
            <div className = "container" style = {{marginTop: '3%', marginBottom: '3%'}}>
            <div className = "row justify-content-between">
            <div className = "col-12 col-md-12 col-xl-12 col-sm-12" >
            {texting.info}
            <br/>
            <Link className = 'btn btn-primary' to='/news' style = {{color: 'white', textDecoration: 'none'}}>
            Back
            </Link>
            </div>
            </div>
            </div>
            </section>
            )
    }
}
}

export default NewsBlock;

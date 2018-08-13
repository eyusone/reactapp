import React, {Component} from 'react';
import 'bootswatch/dist/sandstone/bootstrap.css';
import Item from './items.jsx';
import Createform from '../../Forms/Button/button.jsx'

class ItemsList extends React.Component {
          render() {
           const style = {
              width: '100%',
              float: 'left',
              //paddingTop: '5%',
              //backgroundColor: 'red'
             //marginLeft: '350px',
              //marginTop: '200px'
          };

          return(
            <div style = {{style}}>
                <ul className = "list-group" >
                {
                 this.props.data.items.map(function(item) { 
                 return <Item key={item} name={item} />})   
                }
                </ul>
                <Createform />
                </div>
              )
    }
}

export default ItemsList;

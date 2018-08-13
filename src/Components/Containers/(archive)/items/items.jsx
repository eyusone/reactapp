import React, {Component} from 'react';
import 'bootswatch/dist/sandstone/bootstrap.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          visible: false
          }
        this.handleClick=this.handleClick.bind(this);
        }

    handleClick() {
        //var val = e.target.value;
        this.setState({
          visible: !this.state.visible
        });
        }
        

    render() {
        const showtext = this.state.visible &&         
        <div>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry 
          richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
        return (
        
        <li className = "list-group-item list-group-item-action">  
        
        {this.props.name}
        
        <button onClick = {this.handleClick} style = {{float:'right'}}>
        Show info
        </button>
        {showtext}
        </li>)
    }
}

export default Item;

import React, {Component} from 'react';

class Menu extends Component {

  render(){
    return (
      <div>
        <ul>
          <li>{this.props.menu1}</li>
          <li>{this.props.menu2}</li>
          <li>{this.props.menu3}</li>
          <li>{this.props.menu4}</li>
        </ul>
      </div>
    )
  }
}
export default Menu;
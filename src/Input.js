import React, {Component} from 'react';

class Input extends Component {

  state = {
    world: '',
    city: ''
  }

  handleChange = e => {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  };

  render(){
    const {world, city} = this.state;
    return (
      <div>
        <h2>다중 Input 관리하기</h2>
        <input name="world" value={world} onChange={this.handleChange}/>
        <input name="city" value={city} onChange={this.handleChange}/>
        <p>{world}의 수도는 {city}입니다.</p>
      </div>
    )
  }
}
export default Input;
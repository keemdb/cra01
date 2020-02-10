import React, {Component} from 'react';
import Menu from './Menu'
import Input from './Input'
import AddBtn from './AddBtn';

class App extends Component {

  state = {
    number: 0,
    input: ''
  }

  aaa = () => {
    this.setState({
      number: this.state.number + 1
    })
  }
  bbb = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };



  render(){

    const array = [0,1,2,3,4,5];

    const gt = array.filter(n => n > 3);
    const whitoutNumber = array.filter(n => n !== 3);

    console.log(gt);
    console.log(whitoutNumber);
    




    return (
      <div>
        <Menu 
          menu1="Home"
          menu2="About"
          menu3="Product"
          menu4="Contact"
        />
        <h1>Counter</h1>
        <div>number: {this.state.number}</div>
        <button onClick={this.aaa}>Increase</button>
        <button onClick={this.bbb}>Decrease</button>
        <Input/>
        <AddBtn/>
      </div>
    )
  }
}
export default App;
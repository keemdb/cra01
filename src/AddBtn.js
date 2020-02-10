import React, {Component} from 'react';

class AddBtn extends Component {

  id = 1;
  state = {
    username: '',
    job: '',
    list: []
  }

  handleChange = e => {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  };

  handleInsert = () => {
    const {username, job, list} = this.state;
    this.setState({
      username: '',
      job: '',
      list: list.concat({ id: this.id, username, job })
    });
    this.id += 1;
  };


  render(){
    const {username, job, list} = this.state;
    return (
      <div>
        <h2>버튼을 눌러서 빈 배열에 값 추가하기</h2>
        <input 
          name="username" 
          placeholder="유저명"
          value={username}
          onChange={this.handleChange}
        />
        <input 
          name="job" 
          placeholder="직업"
          value={job}
          onChange={this.handleChange}
        />
        <button onClick={this.handleInsert}>추가</button>
        <p>{username}의 직업은 {job}입니다.</p>
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              {item.username}({item.job})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AddBtn;

import {Component} from 'react';

interface User {
  name:string,
  age:number
}

interface UserSearchProps {
  users: User[]
}

interface UserSearchState {
  name :string,
  user: User | undefined
}

class UserSearchwithClass extends Component<UserSearchProps> {
    state: UserSearchState
     = {
      name:'',
      user: undefined
    }

    onClick = () =>{
      const { users } = this.props;
      const { name } = this.state;
      const foundUser = users.find(user => user.name === name);
      this.setState({user : foundUser});
    };

    render() {
      const {name, user} = this.state;
      return (<div style={{marginTop:"20px"}}>
      <h3>
        User Search with Class component
      </h3>
        <input type="text" value={name} onChange={(e)=>{this.setState({name : e.target.value})}}/>
        <button onClick={this.onClick}>Find user</button>
        {user && <div>
          <div>Found users:</div>
          <div>{user.name}</div>
          <div>{user.age}</div>
        </div>}
      </div>);
    }
}

export default UserSearchwithClass;
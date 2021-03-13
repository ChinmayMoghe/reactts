import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';
import UserSearchwithClass from './class/UserSearchwithClass';

const App = () =>{
  const users = [
    {name:"Sarah",age:30},
    {name:"Mundus",age:20},
    {name:"Jacker",age:25},
  ];
  return (<div>
      <h1>Hi there !</h1>
      <GuestList/>
      <UserSearch/>
      <EventComponent/>
      <UserSearchwithClass users = {users}/>
  </div>)
}

ReactDOM.render(<App/>,document.querySelector('#root'));
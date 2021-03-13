import { useEffect, useRef, useState } from "react"

const users = [
  {name:"Sarah",age:30},
  {name:"Mundus",age:20},
  {name:"Jacker",age:25},
];

const UserSearch: React.FC = () =>{
  //inferred type of state variable name
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState('');
  const [user,setUser] = useState<{name:string,age:number}|undefined>();

  useEffect(()=>{
    inputRef.current?.focus();
  },[]);

  const onClick = () =>{
    const foundUser = users.find(user => user.name === name);
    setUser(foundUser);
  };
  return <div style={{marginTop:"20px"}}>
    <h3>
      User Search
    </h3>
      <input ref={inputRef} type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="" id=""/>
      <button onClick={onClick}>Find user</button>
      {user && <div>
        <div>Found users:</div>
        <div>{user.name}</div>
        <div>{user.age}</div>
      </div>}
    </div>
}

export default UserSearch;
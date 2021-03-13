import {useState} from 'react';

const GuestList : React.FC = () =>{
  const [name, setName] = useState('');
  const [guestList,addGuestToList] = useState<string[]>([]);
  const keyPresses = ["Enter"];
  const disableAddGuest = !Boolean(name.trim());
  const onClick = () =>{
    addGuestToList([...guestList,name]);
    setName('');
  };
  return <div>
    <h3>Guest List</h3>
    <ul>
      {guestList.map((guest)=>(<li key={guest}>{guest}</li>))}
    </ul>
    <input type="text" value={name} onKeyDown={(e)=>{if(keyPresses.includes(e.code) && name) {onClick();}}} onChange={(e)=>{setName(e.target.value)}}/>
    <button disabled={disableAddGuest} onClick={onClick}>Add Guest</button>
    </div>
}

export default GuestList;
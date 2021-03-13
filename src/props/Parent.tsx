import {ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC color="red" onClick={()=>{console.log("Clicked this button")}}>
    <div>Some inner code / children</div>
  </ChildAsFC>;
}

export default Parent;
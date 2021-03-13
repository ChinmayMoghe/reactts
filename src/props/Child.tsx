
interface Childprops {
  color:string;
  onClick : ()=> void;
}


// Typescript doesn't know Child is a React Component
// accessing React properties (propTypes,contextTypes), will throw a error
// accessing children is not possible here
export const Child = ({color,onClick}:Childprops) => {
  return (<div>{color}</div>)
}

export const ChildAsFC: React.FC<Childprops> = ({color,onClick}) =>{
  return <div>
    {color}
  <button onClick={onClick}>Click this</button>
  </div>
}

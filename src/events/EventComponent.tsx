import React from 'react';

const EventComponent: React.FC = () => {

  const onChange:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
  }

  const onDragStart:React.DragEventHandler<HTMLDivElement> = (event) => {
    console.log(event);
  }

  return (<div style={{marginTop:"20px"}}>
     <h2>Event handling with typescript and React</h2>
     <div>
        <div style={{marginTop:"15px"}}><label htmlFor="inline-handler">Inline onChange event handler - does not need type annotation - type of event is inferred.</label></div>
        <div style={{marginTop:"15px"}}><input type="text" id="inline-handler" name="inline-handler" onChange={(e)=>{console.log(e.target.value)}}/></div>
     </div>
     <div>
        <div style={{marginTop:"15px"}}><label htmlFor="custom-handler">Standalone event handler - need to specify event type</label></div>
        <div style={{marginTop:"15px"}}><input type="text" id="custom-handler" name="custom-handler" onChange={onChange}/></div> 
     </div>
     <div draggable onDragStart={onDragStart}>Dragging me</div>
  </div>)
}

export default EventComponent;
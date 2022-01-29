import React, { PureComponent, useState, useEffect } from 'react';
import trashCan from '../images/trash-can.png'
import editIcon from '../images/edit.png'
import "./todoitem.style.css"


const TodoItem = (props) =>{
 
  const [editState, updateEdit] = useState(false);

  const handleEdit = ()=>{
      updateEdit(true);
  }

  let viewMode = {};
  let editMode = {};
  if(editState){
      viewMode.display = "none";
  }
  else{
      editMode.display= "none";
  }

  const completedStyle = props.todo.completed?{ "textDecoration" : "line-through","color":"silver" }:null;

  const handleUpdatedDone = (e)=>{
      if(e.key == "Enter"){
          updateEdit(false);
      }
  }

  useEffect(() => {
      return ()=>{
            console.log("Component unmounted");
      }
  }, [])

 return  <li className="item">
     <div style={viewMode}>
     <input className="checkbox" type="checkbox" onChange={()=> { props.handleChangeProps(props.todo.id)  }} checked={props.todo.completed} id={props.todo.id} /> 
     <label style={completedStyle} htmlFor={props.todo.id}>{props.todo.title}</label> 
     <img onClick={()=>props.DeleteItem(props.todo.id)} src={trashCan} width={28} height={28}/>
     <img onClick={handleEdit} value={props.todo.title} src={editIcon} width={28} height={28}/>
     </div>
     <input onKeyDown={handleUpdatedDone} onChange={ (e) =>{ props.updateTodoItemProp(e.target.value, props.todo.id) }} value={props.todo.title} className='textInput' type="text" style={editMode}/>
     </li> 
}
export default TodoItem;
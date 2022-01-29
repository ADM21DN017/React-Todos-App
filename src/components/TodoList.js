import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';
const  TodoList = (props)=>{
    
        return(
            <ul>
                {
                    props.todos.map(d=><TodoItem updateTodoItemProp={props.updateTodoItemProp} DeleteItem={props.DeleteItem} 
                        handleChangeProps={props.handleChangeProps}  key={d.id} todo={d} />  )
                }
            </ul>
        );
}
export default TodoList;

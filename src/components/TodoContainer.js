import {React, useEffect, useState} from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import {v4 as uniqueID} from "uuid";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { Navbar } from "./Navbar";


const  TodoContainer = ()=> {


    let getFromAPI = ()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(d=>d.json()).then(data=> { updateTodos(data); localStorage.setItem("todoItem", JSON.stringify(data)) } );
        return [];
    }

    let initializeTodos = ()=>{
        console.log("test run")
      
        // getting stored items
        const temp = localStorage.getItem("todoItem")
        const loadedTodos = temp?JSON.parse(temp): getFromAPI();
        
        return loadedTodos;
      }

    const [todos, updateTodos ] = useState(initializeTodos);

    // useEffect(() => {
    //     console.log("test run")
      
    //     // getting stored items
    //     const temp = localStorage.getItem("todoItem")
    //     const loadedTodos = JSON.parse(temp)
      
    //     if (loadedTodos) {
    //       setTodos(loadedTodos)
    //     }
    //   }, []);

   
    
    
    let setTodos = loadedTodos =>{
        updateTodos(loadedTodos);
    }

    const deleteItem = (id)=>{
        console.log("We have to delete the item with id - ", id);
        updateTodos(todos.map(d=>{
            if(d.id!=id){
                return d;
            }
        }).filter(f=>f!=undefined));
    }

    const handleChange = (id)=>{
        console.log("Handeled Change", id);

        updateTodos(todos.map(d=>{
            if(d.id===id){
                return {
                    ...d,
                    completed:!d.completed
                }
            }
            return d;
        }));
        }


    const addTodoItem = (title)=>{
        var newId = uniqueID();
        var newTodo = {
            id:newId,
            title: title,
            completed:false
        };
        updateTodos([...todos, newTodo]);
    } 


    const updateTodoItem = (updatedTitle, id) => {
        updateTodos(todos.map(todo=>{
            if(todo.id===id){
                todo.title = updatedTitle
            }
            return todo;
        }));
    }

   
    
        return(
            <>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <div className="container">
                    <div className="inner">
                        <Header />
                        <InputTodo addItemProp={addTodoItem} />
                        <TodoList updateTodoItemProp={updateTodoItem} DeleteItem={deleteItem} handleChangeProps={handleChange} todos={todos}/> 
                    </div>
                    </div>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route  path="*">
                    <NotFound/>
                </Route>
                 
            </Switch>
            </>
        );

}
export default TodoContainer;
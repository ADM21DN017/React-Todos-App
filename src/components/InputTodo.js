import React, { PureComponent, useState } from 'react';




const InputTodo = (props)=>{

    const [ stateObj ,updateState ] =  useState({
        title:"",
        someothervalue: ""
    })

    const onChange=(e)=>{
        updateState({
            [e.target.name]: e.target.value
        })
    }

    const btnSubmit = (e)=>{
        e.preventDefault();
        if(stateObj.title==""){
            alert("Please enter a valid value.");
            return;
        }
        props.addItemProp(stateObj.title);
    }
    

    return <form onSubmit={btnSubmit} className="form-container">
        <input className="input-text" type="text" name='title' placeholder='Add todo item.....' value={stateObj.title} onChange={onChange}/>
        <button className="input-submit">Submit</button>
    </form>
}

export default InputTodo;
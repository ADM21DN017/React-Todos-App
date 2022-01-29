import React, { PureComponent } from 'react';
import  ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import TodoContainer from './components/TodoContainer';

import "./Style.css";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
<TodoContainer/></BrowserRouter></React.StrictMode>,

document.getElementById("root"))
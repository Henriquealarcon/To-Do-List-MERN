import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
const rootElement = document.getElementById("root");


const App = () => {
    return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route path ="/login" component = {Login} />
            <Route path ="/register" component = {Register} />
        </Routes>
    </BrowserRouter>
    rootElement
         
    </div>
    )
}

export default App;
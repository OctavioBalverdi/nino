import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login1 from './Component/Login/Login1';
import Ps from './Ps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/ps' element={<Ps/>}/>

    </Routes>
    </BrowserRouter>
);


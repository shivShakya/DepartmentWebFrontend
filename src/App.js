import './App.css';
import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Register from './Utils/Register/Register';
import LoginPage from './Utils/LoginPage/LoginPage';
import Dashbaord from './Utils/DashBoard/DashBoard';
import MainPage from './Utils/MainPage/MainPage';


function App() {
  return (

    <div className="App">
          <BrowserRouter>
                <Routes>
                       <Route path='/register' element={<Register/>}/>
                       <Route path='/login' element={<LoginPage/>}/>
                       <Route path='/dashboard' element={<Dashbaord/>}/>
                       <Route path='/' element={<MainPage/>} />                
                </Routes>
         </BrowserRouter>
    </div>
  );
}
export default App;
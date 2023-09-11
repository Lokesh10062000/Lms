import React from 'react';
import './App.css';
import HomeComponent from './Home';
import Login from './Login';
import {Routes,Route} from 'react-router-dom';
import Forgot from './Forgot';


function App() {
  return (
   <div>
   {/* // <HomeComponent/> */}
   {/* <Login/> */}
   <>
     <Routes>
      <Route path='/' element= {<HomeComponent/>} />
      <Route path='/login' element ={<Login /> } />
      <Route path='/forgot' element={<Forgot/>}/>
     </Routes>
    </>
  </div>
      
  );
}

export default App;

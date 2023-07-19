import { getValue } from '@testing-library/user-event/dist/utils';
import React,{useState}from 'react';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Crud from './components/crud/Crud';
// import Form from './components/Form/Form';
// import Navbar from './components/navbar/Navbar';
// import SideBar from './components/sideBar/SideBar';
import Demo from './components/Demo';
import ContactPage from './components/portfolio/ContactPage';
import Portfolio from './components/portfolio/Portfolio';
import Todo from './components/todo/Todo';

function App() {
  
  return (
    <React.Fragment>
    <div className='main'>
      {/* <Todo/> */}
  
     
      {/* <Demo/> */}
      {/* <div className='nav'>
        <Navbar/>
      </div>
      <div className="sideBar">
        <SideBar/>
      </div> */}
    {/* <Form/> */}

    <BrowserRouter> 
        <Routes>
           <Route path='/' element={<Portfolio/>} /> 
            <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
    </BrowserRouter>


    {/* <ContactPage/> */}?
    <Crud/>
    </div>
    </React.Fragment>
  );
}

export default App;

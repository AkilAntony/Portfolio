import React,{useState,useRef,useEffect} from 'react';
import axios from 'axios';

import './todo.css';

function Todo() {
  
    const [todo,setTodo]=useState('');
    const[todoValue,setTodoValue]=useState('')
    const[todoFromApi,setTodoFromApi]=useState([])
    const resetInputField=useRef(null);
    const Add=()=>{
      setTodoValue(todo)
      
     //posting todo's to DB
      if(todo){
        const postTodo={"todo":todo}
        axios.post('http://localhost:3000/todos',postTodo);
      }
        //making the input field empty 
      resetInputField.current.value='';
  }
  //getting data from DB
  useEffect(()=>{
    const getData=async ()=>{
      const resultData=await axios.get('http://localhost:3000/todos');
      console.log(resultData.data)
       setTodoFromApi(resultData.data);
    };getData();},[todoFromApi])

  return (
    <React.Fragment>
    <div className='mainContainer'>
         {/* get input from users */}
         
      <div className="todoInputContainer col-md-12">
        <input type='text' id='todoInput' 
          onChange={(e)=>setTodo(e.target.value)}
          ref={resetInputField}/>
        <button onClick={Add} id='addButton' className='button btn-success'>Add todo</button>
      </div>
      {todoFromApi.map((value,index)=><div className="outputContainer row">
        <div className="todos col-sm-1">
          <h5>{value.title}</h5>
          <p>{value.price}</p>
          </div>
          
          {/* <div className="buttons col-sm-5">
          <button className='edit-btn button btn-info'>Edit</button>
          <button className='delete-btn button btn-danger'>Delete</button>
          
          </div> */}
           </div> )}         
    </div>
    </React.Fragment>
  )
}

export default Todo;
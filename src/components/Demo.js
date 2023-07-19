import React,{useState,useEffect} from 'react'

function Demo() {
 
  //  const cars = ['Ford', 'BMW', 'Audi'];
  //  const newCars = [
  //   {id: 1, brand: 'Ford'},
  //   {id: 2, brand: 'BMW'},
  //   {id: 3, brand: 'Audi'}
  // ];
  //   const show=()=>{alert('hi')};
  //   const[Count,setCount]=useState(1);
  //   const[showHide,setShowHide]=useState(false);
  //   const refresh=()=>setCount(0);
  //   const[name,setName]=useState("");

    // todo
    const[todoName,setTodoName]=useState('');
    const[todoMail,setTodoMail]=useState('');
    const{name,setName}=useState('');
    const[age,setAge]=useState('');
  
    const[postDetails,setPostDetails]=useState([]);
    let arr=[{Name:{todoName},mail:{todoMail}}]
    const[details,setDetais]=useState([]);
    const submitTodo=(e)=>{
      e.preventDefault();
      setDetais(details.push(arr))
      console.log(details)  
    }

    // get request
    // useEffect(()=>{
    //   fetch('http://localhost:3000/posts')
    //        .then(response=>response.json())
    //        .then(data=>{setPostDetails(data);
    //         console.log(data)})
    //         .catch(e=>console.log(e));
           
    // },[])
   

  return (
    <div>
        {/* <h1>{name}</h1>
        <h1>{Count}</h1>
        <button onClick={()=>setCount(Count+1)}>click me</button>
        <button onClick={refresh}>Reset</button>
        <button onClick={()=>setShowHide(!showHide)}>show/Hide</button>
        {showHide?<h1>akil</h1>:null}
        <ul>
          {cars.map((car)=><li>{car}</li>)}
        </ul>
        
        <table>
          <tr>
          <th>brand</th>
          <th>NO</th>
          </tr>
            {newCars.map((newcar)=>
            <tr>
              <td>{newcar.brand}</td>
              <td>{newcar.id}</td>
            </tr>)}
        </table>
        <hr />
        

        // {/* forms */}
        {/* <h1>Personal Details</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)}/>
          <br />
          <label htmlFor="address">Address</label>
          <textarea/> 
        </form>
        {name}
        <br /><hr /> */} 

            {/* todo */}

        <h1>todo</h1>
        <label htmlFor="name">Name:</label>
      <input type='text' name='name' 
       onChange={(e)=>setName(e.target)}/>
       {  console.log({name})}
      <input type="text" name="age"  />
      <button onClick={()=>setDetais(name,age)}>submit</button>
      {  console.log({details})}
    </div>
  )
}

export default Demo
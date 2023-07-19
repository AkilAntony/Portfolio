import axios from 'axios';
import React,{useState,useRef} from 'react'
function Crud() {
    const[name,setName]=useState('');
    const[mail,setMail]=useState('');
    const[addedNumbers,setAddedNumbers]=useState([]);
    const ref = useRef(null);
    const arr=[1,2,34,3,5,6,7];
    const handleSubmit=()=>setAddedNumbers(oldArray=>[...oldArray,(Number(name)+Number(mail))]);
    //post data
  //   const submit=()=>{
  //     name && mail ?{}
  //  axios.post('http://localhost:3000/details',
  //     {name:name,mail:mail}).then((response)=>
  //     console.log(response.data))
  //     .catch((error)=>console.log(error.response))
   
  //     // navigator.getUserMedia({audio:true,video:true}, function(stream) {
  //     //   stream.getTracks().forEach(x=>x.stop());
  //     // }, err=>console.log(err));
  //    : null;
  //   }
  return (
    <div>
        <form >
            <input type="text"
             name="name"  value={name} id="" 
             onChange={(e)=>setName(e.target.value)}
             ref={ref}/>
            <input type="email" 
             name="mail" value={mail} id=""
              onChange={(e)=>setMail(e.target.value)}
              ref={ref}/>
            <button onClick={handleSubmit}>Submit</button>
            {console.log(addedNumbers)}
        </form>
        {addedNumbers.map((values,index)=>
         <li key={index}>{values}</li>
        )}
        {/* {arr.map((value)=><h1>{value}</h1>)} */}
    </div>
  )
}

export default Crud
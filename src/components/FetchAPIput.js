//update emp

import React, { useState, useEffect } from 'react'
import "/Users/kusum/djangoProjects/employee-app/node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useParams } from "react-router-dom";

function FetchAPIput() {

const [data, setdata] = useState([])
const [inputs, setinputs] = useState({})
const {params} = useParams();
const apiPut= () => {
   fetch('http://127.0.0.1:8000/api/employee/update/${params}', {
    method: 'PUT',
    body: JSON.stringify({
      id : inputs.id,
      fname:inputs.fname,
      lname:inputs.lname,
      desig:inputs.desig,
      location:inputs.location,
      manager:inputs.manager,
   }),
   headers: {
    'Content-type': 'application/json'
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log(params);
    setdata(json);
  });
    };
const handleChange=(event)=>{
    event.persist();

    setinputs((input)=>({
        ...inputs,
        [event.target.name]:event.target.value,
    }
    ))
}
const handleSubmit =(event)=>{
    event.preventDefault();
    apiPut();
    console.log(inputs); 
}
    return (
        <div>
             <br/>
            <center>UPDATE EMPLOYEE</center>
            <br/>
            <div className='container1 text-center'>
                <form onSubmit={handleSubmit}>
                    <input type ="number" name="id" placeholder="EmpId" onChange={handleChange} className='btn1'/> <br/>  
                    <input type ="text" name="fname"    placeholder="fname" onChange={handleChange} className='btn1'/> <br/>  
                    <input type ="text" name="lname"    placeholder="lname" onChange={handleChange} className='btn1'/> <br/>
                    <input type ="text" name="desig"    placeholder="desig" onChange={handleChange} className='btn1'/> <br/>
                    <input type ="text" name="location" placeholder="location" onChange={handleChange} className='btn1'/> <br/>
                    <input type ="text" name="manager"  placeholder="manager" onChange={handleChange} className='btn1'/> <br/>
                    <input type ="submit" name="submit" onChange={handleChange} className="btn"/>
                </form>
            </div>
        </div>
    )
}

export default FetchAPIput
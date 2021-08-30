//createemp
import React, { useState, useEffect } from 'react'
import "/Users/kusum/djangoProjects/employee-app/node_modules/bootstrap/dist/css/bootstrap.min.css"

function FetchAPI() {

const [data, setdata] = useState([])
const [inputs, setinputs] = useState({})
const apiPost= () => {
   fetch('http://127.0.0.1:8000/api/employee/create', {
    method: 'POST',
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
    console.log(json);
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
    apiPost();
    console.log(inputs); 
}
    return (
        <div>
            <br/>
            <center>CREATE EMPLOYEE</center>}
            <div className='container1 text-center' >
                <form onSubmit={handleSubmit}>
                    <input type ="text" name="fname"    placeholder="First name" onChange={handleChange} className='btn1'/> <br/>  
                    <input type ="text" name="lname"    placeholder="Last name" onChange={handleChange} className='btn1'/> <br/>
                    <input type ="text" name="desig"    placeholder="Designation" onChange={handleChange} className='btn1'/> <br/>
                    <input type ="text" name="location" placeholder="Location" onChange={handleChange} className='btn1'/> <br/>
                    <input type ="text" name="manager"  placeholder="Manager" onChange={handleChange} className='btn1'/> <br/>
                    <input type ="submit" name="submit" onChange={handleChange} onClick="OK" className='btn'/>
                </form>
            </div>
        </div>
    )
}

export default FetchAPI
//gives emp list
import React, { useState, useEffect } from 'react'

function FetchAPI() {

const [data, setdata] = useState([])
const apiGet= () => {
   fetch('http://127.0.0.1:8000/api/employees')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    setdata(json);
  });
    };
    useEffect(() => {
        apiGet();
    }, [])
    return (
        <div>
            <br/>
            <center>EMPLOYEE DATA</center>
            <br/>
            <div>
                    {data.map(item => 
                        <div className="container2 text-center">
                        <option className='box' title={item.id} >EmployeeId: {item.id}</option>
                        <option className='box' title={item.id} >Name: {item.fname} {item.lname}</option>
                        <option className='box' title={item.id} >Designation: {item.desig} </option>
                        <option className='box' title={item.id} >Location: {item.location} </option>
                        <option className='box' title={item.id} >Manager: {item.manager} </option>
                        </div>
                        )}
            </div>
        </div>
    )
}

export default FetchAPI
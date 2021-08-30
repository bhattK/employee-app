
import React, { useState, useEffect } from 'react'
// import Button  from './components/Button';

function Emplist() {
  const [empdetail, setempdetail] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/employees',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(resp => resp.json()).then(resp => setempdetail(resp)).then(error => console.log(error))
  }, [])
  return (
    <div>
    <center>
      <h2 className='text-center'>Employee Data</h2>
     
          <option selected disabled="fasle"></option>
          {
            empdetail.map(emplist => {
              return (
                <div className='container'>
                <option className='box' title={emplist.id} >EmployeeId: {emplist.id}</option>
                <option className='box' title={emplist.id} >Name: {emplist.fname} {emplist.lname}</option>
                <option className='box' title={emplist.id} >Designation: {emplist.desig} </option>
                <option className='box' title={emplist.id} >Location: {emplist.location} </option>
                <option className='box' title={emplist.id} >Manager: {emplist.manager} </option>
                {/* <Button/> */}
                </div>
              )
            }
            )
          } 
      </center>
    </div>
  )
}

export default Emplist;


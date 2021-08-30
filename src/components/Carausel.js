import React from 'react'
import logo from './img1.jpg';
import logo1 from './img2.jpg';
import logo2 from './img3.jpg';
import "/Users/kusum/djangoProjects/employee-app/node_modules/bootstrap/dist/css/bootstrap.min.css"
import index from "/Users/kusum/djangoProjects/employee-app/src/index.css" 
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom"

const Carausel = () => {
  return (
  //   <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  // <div className="carousel-inner">
  //   <div className="carousel-item active">
  //     <img src={logo} alt="hello" className="d-block w-10"/>
  //   </div>
  //   <div className="carousel-item">
  //     <img src={logo1} className="d-block w-100" />
  //   </div>
  //   <div className="carousel-item">
  //     <img src={logo2} className="d-block w-100" />
  //   </div>
  // </div>
<div>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Employee Details</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to='/fetchdata' className="btn btn-primary" >Click Here</Link> </div>
</div>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Create Employee</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to='/createemp' className="btn btn-primary" >Click Here</Link> </div>
</div>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Update Employee</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to='/updateemp' className="btn btn-primary" >Click Here</Link> </div>
</div>
</div>
  )
}
export default Carausel
import React from 'react'
import "/Users/kusum/djangoProjects/employee-app/node_modules/bootstrap/dist/css/bootstrap.min.css"

const CompanyInfo = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand">Hii-Tech</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" >Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >About Us</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Explore
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" >Action</a></li>
              <li><a className="dropdown-item" >Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" >Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default CompanyInfo



































// function CompanyInfo({ children, eventKey }) {
//     const decoratedOnClick = useAccordionButton(eventKey, () =>
//       console.log('totally custom!'),
//     );
  
//     return (
//       <button
//         type="button"
//         style={{ backgroundColor: 'pink' }}
//         onClick={decoratedOnClick}
//       >
//         {children}
//       </button>
//     );
//   }

// export default CompanyInfo;
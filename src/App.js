import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Emplist from './components/Emplist'
import CompanyInfo from './components/CompanyInfo'
import RetrieveEmp from './components/FetchAPIput'
import FetchAPIpost from './components/FetchAPIpost'
import FetchAPIput from './components/FetchAPIput'
import Carausel from './components/Carausel'
import {BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom"
import FetchAPI from './components/FetchAPI'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path='/'>
            <CompanyInfo/>
            <Carausel/>
          </Route>

          <Route exact path='/fetchdata'>
            <FetchAPI/>
          </Route>
 
          <Route exact path='/createemp'>
            <FetchAPIpost/>
          </Route>
          
          <Route exact path='/updateemp/:id'>
            <FetchAPIput/>
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App
























 {/* import { useState } from "react"
 import Header from "./components/Header";
 import Tasks from "./components/Tasks";
 import AddTask from "./components/Tasks";

 const App = () => { */}

//     const [tasks, setTasks] = useState([
//         {
//         id: '1',
//         text: 'Doctors Apppointement',
//         day: 'Monday',
//         reminder: true,
//         },
//         {
//         id: 2,
//         text: 'Meeting in school',
//         day: 'Tuesday',
//         reminder: true,
//         },
//         {
//         id:3,
//         text:'Food shopping',
//         day:'Wednesday',
//         reminder: false,
//         }
//     ])

// //Delete Task

// const deleteTask = (id) => {
//   setTasks(tasks.filter((task) => task.id !== id))
// }

// //Toggle reminder

// const toggleReminder = (id) => {
//   setTasks(tasks.map((task)=> task.id === id 
//   ? {...task, reminder: !task.reminder} : task) )
// } 
//   return (
//     <div className='container'>
//       <Header />
//       {/* <AddTask /> */}
//       {tasks.length > 0 ? (
//         <Tasks tasks={tasks} onDelete=
//         {deleteTask} onToggle = {toggleReminder}/>) : ('No Task')}
//     </div>
//   )
// }

// export default App
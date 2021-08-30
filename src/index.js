import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

// ReactDOM.render(
//   <Router>
//      <Switch>
//         <Route exact path="/" component={Homepage}/>
//       <Route exact path="/about" component={Aboutpage }/>
//     </Switch>
//   </Router>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

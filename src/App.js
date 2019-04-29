import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toast.css';
import './App.css';
import Nav from './components/Nav';
import About from './views/About';
import Friends from './views/Myfriends';
import Login from './views/Login';


const Home = () => <h1>You are home </h1>
const Friends = () => (<ul>
  <li>...</li>
  <li>...</li>
  </ul>)


function App() {
  return (
    <div className="App">
    <Router>
      <Nav />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/About" component={About}/>
      <Route path="/MyFriends" component={Friends}/>
      <Route path="/Login" component={Login}/>

    </Router>
    
    </div>
  );
}

export default App;

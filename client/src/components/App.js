import React from "react";
import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import SendMail from './SendMail'
import Home from './Home'

// const getLoggedStatus = () => {
//   let loggedIn
// }


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <Router>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
       {loggedIn ? (<SendMail />) : (<Home />)}      
    </Router>
  );
}
export default App;
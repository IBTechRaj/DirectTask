import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';


const useStyles = makeStyles((theme) => ({
  // root: {
    // background: '#ffffff',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: theme.spacing(2),

    // '& .MuiTextField-root': {
    //   margin: theme.spacing(1),
    //   width: '300px',
    // },
    // '& .MuiButtonBase-root': {
    //   margin: theme.spacing(2),
    // },
    
  // },
  // navlinks: {
  //   marginLeft: theme.spacing(10),
  //   display: "flex",
  // },
  // logo: {
  //   flexGrow: "1",
  //   cursor: "pointer",
  // },
  // link: {
  //   textDecoration: "none",
  //   color: "white",
  //   fontSize: "20px",
  //   marginLeft: theme.spacing(20),
  //   "&:hover": {
  //     color: "yellow",
  //     borderBottom: "1px solid white",
  //   },
  // },
  body: {
      background: '#61DAFB',
      height: '80vh',
      alignItems: 'center',
      display:'flex',
flexDirection: 'column',
justifyContent: 'center',
    },
  // message: {
  //   justifyContent: 'center',
  //     background: '#98D4F1',
  //     padding: theme.spacing(2),
  //     margin: theme.spacing(1),
  // }
}));


const SendMail = () => {


  const classes = useStyles();

  const [subject, setSubject] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')



  const handleSubmit = async (event) => {
    event.preventDefault();
    if (subject && name && email && message) {
      console.log('sending email')
      const emailData = {
        "subject": subject,
        "name": name,
        "email": email,
        "message": message
      }
      const jwt = localStorage.getItem('token')
      const url = 'http://localhost:3001/contacts'

      try {
        const res = await axios.post(url, { emailData }, { headers: { Authorization: `Bearer ${jwt}` } });
        console.log('res', res);
        setSubject('')
        setName('')
        setEmail('')
        setMessage('')
      
      }
      catch (error) {
        console.log('oh, no', error);
      }
    }
    else {
      console.log('blank fields not permitted')
    }
  }

  return (
    <div className={classes.body}>
    <h1> Welcome to Shift Hospitals</h1>
    <h4 > You can refer your friends by sending an email from here </h4>
      <h2>Login to Refer</h2>
      
    </div>
  )

}

export default SendMail

import React, { useState } from 'react';
import axios from 'axios';
import {
  makeStyles,
} from "@material-ui/core";
import 'react-responsive-modal/styles.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
  body: {
    background: '#61DAFB',
  },
  message: {
    justifyContent: 'center',
    background: '#61DAFB',
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  }
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

      const emailData = {
        "subject": subject,
        "name": name,
        "email": email,
        "message": message
      }
      console.log('sending email', emailData)
      console.log('email:', emailData)
      const jwt = localStorage.getItem('token')
      const url = 'http://localhost:3001/contacts'

      try {
        const res = await axios.post(url, emailData, { headers: { Authorization: `Bearer ${jwt}` } });
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
      <h4 align='center' className={classes.message}> You can refer your friends by sending an email from here </h4>
      <h2 align='center' >Email Details</h2>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="Subject"
          variant="outlined"
          type="text"
          required
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Message"
          variant="outlined"
          type="text"
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <div>
          <Button type="submit" variant="contained" color="primary">
            Send Mail
          </Button>
        </div>
      </form>
    </div>
  )

}

export default SendMail

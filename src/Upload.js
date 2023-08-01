import React, { useState } from 'react';
import { Button } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import db from './firebase';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Upload.css';

function Upload() {
  const navigate = useNavigate();
  const [hotel, setHotel] = useState('');
  const [location, setLocation] = useState('');
  const [item, setItem] = useState('');
  const [cost, setCost] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');

  const submit = (event) => {
    event.preventDefault();
    addDoc(collection(db, 'recipes'), {
      HotelName: hotel,
      ItemName: item,
      Location: location,
      Rating: rating,
      Review: review,
      cost: cost,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    alert('Thank you for your valuable contribution');
    navigate('/');
  };

  const go1 = async () => {
    navigate('/');
  };

  return (
    <div className='v1'>
      <div className="top">
        <Button onClick={go1} color="secondary" variant="contained">
          Go to home
        </Button>
      </div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, minWidth: '250px', width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="HotelName"
          placeholder="HotelName"
          onChange={(event) => setHotel(event.target.value)}
        />
        <br />

        <TextField
          required
          id="outlined-required"
          label="Location"
          placeholder="Enter Your Location"
          onChange={(event) => setLocation(event.target.value)}
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Item"
          placeholder="Enter the Item Name"
          onChange={(event) => setItem(event.target.value)}
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Cost"
          type="number"
          placeholder="Enter the cost of item"
          onChange={(event) => setCost(event.target.value)}
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Rating"
          type="number"
          placeholder="Give a Rating out of 10"
          onChange={(event) => setRating(event.target.value)}
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Review"
          placeholder="Write a Review"
          onChange={(event) => setReview(event.target.value)}
        />
        <br />
        <Button onClick={submit} className="frm btns2" variant="contained">
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default Upload;

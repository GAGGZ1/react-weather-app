import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox(){
  const [city,setCity]=useState("");

  let handleChange=(evt)=>{
    setCity(evt.target.value);
  }

  let handleSubmit=(evt)=>{
    evt.preventDefault();
    console.log(city);
    setCity("");
  }
  return (
    <div className='SearchBox'>
    <h3>  &nbsp;  Seach for the Weather</h3>
    <form  onSubmit={handleSubmit}>
       &nbsp; 
      <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
       <br />
      &nbsp; 
     <br />
      <Button variant="contained" type='submit'  >Contained </Button>
    </form>
    </div>
  );
}
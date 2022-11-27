 import * as React from 'react';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField'
import { Button, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Container } from '@mui/system';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Text() {

 
  return (
    <>
    <div>
      <h1> switch </h1>
      
       <Switch {...label} defaultChecked />
      <Switch {...label} />
     
    </div>

<Container>

  <Typography
   variant="h6"
   color="textSecondary"
   component="h2"
   gutterBottom
  
  >
Createa New Note

  </Typography>

<form noValidate autoCapitalize='off'>

<TextField
label="note title"
variant="outlined"
color="secondary"
fullWidth
required 




/>

</form>

<Button
onClick={()=> console.log('you clicked me')}
type="submit"
color="secondary"
variant="contained"
endIcon={<KeyboardArrowRightIcon />}

>
submit
</Button>
</Container>
</>
  );
}




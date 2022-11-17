// import { Stack, TextField } from '@mui/material'

// const TextField = () => {
//     return (
//         <Stack spacing={4}>
//             <Stack direction='row' spacing={2}>
//                 <TextField label='Name' variant='outlined' />
//                 <TextField label='Name' variant='outlined' />
//                 <TextField label='Name' variant='outlined' />
//          </Stack>





         import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function TextField() {
  return (
    <div>
      <h1> switch </h1>
      
       <Switch {...label} defaultChecked />
      <Switch {...label} />
     
    </div>
  );
}




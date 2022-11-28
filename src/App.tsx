
import './App.css';
import Drawer from './components/Drawer';
import MuiButton from './components/MuiButton';
import Text from './components/TextField';
import MuiTypography from './components/MuiTypography';
import Notes from './pages/Notes';
import Create from './pages/Create';
import Test from './pages/Test';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { purple } from '@mui/material/colors';

import { Routes, Route } from "react-router-dom"

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})


function App() {
  return (
    <div>
   
       <MuiTypography />
      <MuiButton />
       <Text />
      <Drawer />
      <Notes/> 


     
      <Routes>
       
          <Route  path="/notes"  element={ <Notes />} />
           
          <Route  path="/test"  element={ <Test />} />
          
          <Route path="/create" element= { <Create />} />
         
         
       
      </Routes>
  </div>


    
  );
}

export default App;

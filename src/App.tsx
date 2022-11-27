
import './App.css';
import Drawer from './components/Drawer';
import MuiButton from './components/MuiButton';
import Text from './components/TextField';
import MuiTypography from './components/MuiTypography';
import Notes from './pages/Notes';


function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
     <Text />
      <Drawer />
      <Notes/>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import Landingpage from "./Components/Landingpage";
import Habitspage from './Components/Habitspage';
function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/habits' element={<Habitspage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
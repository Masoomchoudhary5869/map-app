import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Login_Registration/Login'
import Register from './Login_Registration/Registration'
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
   <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;

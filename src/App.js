import {Login} from './pages/Login';
import { Register } from './pages/Register';
import { Homepage } from './pages/Homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/Login" element ={<Login />} />
          <Route path="/Register" element ={<Register />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

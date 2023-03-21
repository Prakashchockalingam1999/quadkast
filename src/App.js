
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import Appheader from './Appheader';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      
      <Appheader></Appheader>
    
      <Routes>
      <Route path='/register' element={<Register/>}></Route>
      
       <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;

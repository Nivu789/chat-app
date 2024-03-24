import './App.css';
import Login from './pages/Login/Login';
import { Routes , Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App flex justify-center h-screen">
      
      <Routes>
        
        <Route element={<Home/>} path="/"></Route>
        <Route element={<Signup/>} path="/signup"></Route>
      
      </Routes>
      
    </div>
  );
  }

export default App;

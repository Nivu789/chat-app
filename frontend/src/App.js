import './App.css';
import Login from './pages/Login/Login';
import { Routes , Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import { useAuthContext } from './contexts/AuthContext';


function App() {
  const {authUser} = useAuthContext();
  return (
    <div className="App flex justify-center h-screen items-center">
      
      <Routes>
      
        <Route element={authUser ? <Home/> : <Navigate to={'/login'}/>} path="/"></Route>
        <Route path="/signup" element={authUser? <Navigate to={'/'}/>:<Signup/>}></Route>
        <Route path="/login" element={authUser? <Navigate to={'/'}/>:<Login/>}></Route>
      
      </Routes>
      
    </div>
  );
  }

export default App;

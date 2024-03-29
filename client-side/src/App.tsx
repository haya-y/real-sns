import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Profile } from './pages/profile/Profile';
import { Register } from './pages/register/Register';
import { AuthContext } from './redux/AuthContext';

export const App = () => {
  const {
    state: { user },
  } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route path='/register' element={user ? <Navigate to='/' /> : <Register />} />
        <Route path='/profile/:username' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

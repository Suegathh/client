
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';
import Dashboard from './pages/Dashboard';
import ContactForm from './pages/ContactForm';

axios.defaults.baseURL = "https://mern-server-peach.vercel.app"
axios.defaults.withCredentials= true

function App() {
 
  return (
    <UserContextProvider>
     <Navbar />
     <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/contactForm' element={<ContactForm />} />
     </Routes>
    </UserContextProvider>
  )
}

export default App

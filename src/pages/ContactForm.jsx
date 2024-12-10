import { useState, useContext } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";


export default function LoginForm() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(UserContext);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/contactForm', data);
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({ email: '', password: '' });
        toast.success('Login successful. Welcome!');
        setIsAuthenticated(true);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type='email'
          name='email'
          placeholder='Enter your email...'
          value={data.email}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Enter your password...'
          value={data.password}
          onChange={handleChange}
          required
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

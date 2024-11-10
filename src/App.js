import './styles/App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import { ReactDOM } from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Transaction from './pages/Transaction';
import Budget from './pages/Budget';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path='/transaction'element={<Transaction />} />
      <Route path='/budget'element={<Budget />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './views/dashboard/dashboard'
import Login from './views/login'
import Register from './views/register'
import NavigatePage from './components/layout/landing'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<NavigatePage />} />
      </Routes>
    </div>
  );
}

export default App;

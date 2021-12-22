// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './views/dashboard/dashboard'
import NavigatePage from './components/layout/landing'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavigatePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

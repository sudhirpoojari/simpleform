import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Complaint from './components/Complaint';
import Application from './components/Application';
import Home from './components/Home';

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/complaint" element={<Complaint />} />
          <Route path="/application" element={<Application />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

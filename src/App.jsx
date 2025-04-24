import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Component/Login';
import './App.css'
import Register from './Component/Register';
import Navbar from './Layout/Navbar';

// Add other page imports here
// import About from './Pages/About/About';
// import Login from './Pages/Login/Login';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home></Home>} />
        <Route path="/Home" element={<Home></Home>} />
        <Route path="/Login" element={<Login></Login>} />
        <Route path="/Register" element={<Register></Register>} />
        {/* Add more routes as needed */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

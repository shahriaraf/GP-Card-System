import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Component/Login';
import './App.css'
import Register from './Component/Register';
import Navbar from './Layout/Navbar';
import DiscountTable from './Component/DiscountTable';

// Add other page imports here
// import About from './Pages/About/About';
// import Login from './Pages/Login/Login';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/discount" element={<DiscountTable></DiscountTable>} />
        {/* Add more routes as needed */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

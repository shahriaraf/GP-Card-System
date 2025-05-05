import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Component/Login';
import './App.css'
import Register from './Component/Register';
import Navbar from './Layout/Navbar';
import DiscountTable from './Component/DiscountTable';
import UserDashboard from './Component/Dashboard/UserDashboard';
import CardList from './Component/CardList';
import AddMoney from './Component/AddMoney';
import CardApplication from './Component/CardApplication';
import CardRegistration from './Component/CardRegistration';
import Transaction from './Component/Transaction';
import UserDetails from './Component/UserDetails';
import UpdateCard from './Component/UpdateCard';
import UserManagement from './Component/UserManagement';

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
        <Route path="/card application" element={<CardApplication></CardApplication>} />
        <Route path="/user-dashboard" element={<UserDashboard></UserDashboard>} />
        <Route path="/card-registration" element={<CardRegistration></CardRegistration>} />
        <Route path="/card-list" element={<CardList></CardList>} />
        <Route path="/add-money" element={<AddMoney></AddMoney>} />
        <Route path="/user-manage" element={<UserManagement></UserManagement>} />
        <Route path="/transaction-information" element={<Transaction></Transaction>} />
        <Route path="/card/:id" element={<UserDetails></UserDetails>} />
        <Route path="/update/:id" element={<UpdateCard></UpdateCard>} />
        {/* Add more routes as needed */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

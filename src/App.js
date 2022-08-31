import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Home/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Learn from './Pages/Learn';
import Buy from './Pages/Buy';
import Community from './Community';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddCard from './Pages/Dashboard/AddCard';
import MyCart from './Pages/Dashboard/MyCart';
import AllCoin from './Pages/Dashboard/AllCoin';
import AddCoin from './Pages/Dashboard/AddCoin';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn" element={<Learn />} ></Route>
        <Route path="/buy" element={<Buy />} ></Route>
        <Route path="/community" element={<Community />} ></Route>

        <Route path="dashbord" element={<Dashboard />} >

          <Route path='addcard' element={<AddCard />} ></Route>
          <Route path='mycard' element={<MyCart />} ></Route>
          <Route path='allcoin' element={<AllCoin />} ></Route>
          <Route path='addcoin' element={<AddCoin />} ></Route>

        </Route>








      </Routes>
    </div>
  );
}

export default App;

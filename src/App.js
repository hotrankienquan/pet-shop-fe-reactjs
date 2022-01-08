import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Pets from './components/Pets/Pets';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from "axios"
import {CardContext} from "./Context/CardContext"
function App() {
  const [totalDogs, setTotalDogs] = useState([])
  const [myCart, addToCart] = useState([{}])
  const [total, setTotal] = useState(0)
  useEffect(() => {
    async function getData() {
      let res = await axios.get("/v1/dogs")
      return res;
    }
    getData().then((res) => setTotalDogs(res.data))
    getData().catch((err) => console.log(err))
  }, [])
  return (
    <CardContext.Provider value={{ myCart, addToCart, total, setTotal }}>
      {/* react context: đưa 2 value myCart, addToCart vào 1 kho chung */}
    <Router>
          <Navbar />
         <div className='page-container'>
          <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/dogs" element={ <Pets allDogs={totalDogs} />}/>
            <Route path="/cart" element={ <Cart />}/>
          </Routes>
      </div>
    </Router>
   </CardContext.Provider>
  );
}

export default App;

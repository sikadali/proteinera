import './Home.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from '../components/search/Search';
import Navbar from '../components/navbar';
import Dogs from "../components/pages/Dogs";
import Cats from "../components/pages/Cats";
import Sheeps from "../components/pages/Sheeps";

export default function Home() {
    return (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Search/>} />
            <Route path='/dogs' element={<Dogs/>} />
            <Route path='/cats' element={<Cats/>} />
            <Route path='/sheeps' element={<Sheeps/>} />
          </Routes>
        </Router>
      );
}


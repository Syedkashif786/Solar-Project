// import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import FAQ from "./Components/FAQ";

import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route element = {<Home></Home>} path = "/" />
      <Route element = {<About></About>} path = "about" />
      <Route element = {<FAQ></FAQ>} path = "faq" />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

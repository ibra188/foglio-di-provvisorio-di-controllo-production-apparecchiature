import React from "react";
import "./index.css";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";

import { BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;

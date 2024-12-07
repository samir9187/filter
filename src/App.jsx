import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import About from "./components/About";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center p-4">
       
        <Routes>
        
          <Route path="/" element={<SearchPage />} />
        
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

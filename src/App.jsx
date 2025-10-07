import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookAppointment from "./pages/BookAppointment";
import BookAppointmentDetails from "./pages/BookAppointmentDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/appointments" element={<BookAppointmentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

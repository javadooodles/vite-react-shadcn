import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DigitalMarketing from "./pages/digitalmarketing";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DigitalMarketing />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing />} />
      </Routes>
    </Router>
  );
}
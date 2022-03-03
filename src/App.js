import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import CalculatorPage from './components/pages/CalculatorPage/CalculatorPage';
import HomePage from './components/pages/HomePage/HomePage';
import QuotePage from './components/pages/Quote/Quote';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </div>
  );
}

export default App;

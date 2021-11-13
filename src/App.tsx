import React from 'react';
import './App.css';
import { Mentalhealth, Diabetes, LandingPage, Navbar } from './components';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 

      <div className="App">
        <Navbar />

        <Routes >

            <Route path="/" element={<LandingPage />} />
            <Route path="mentalhealth" element={<Mentalhealth />} />
            <Route path="diabetes" element={<Diabetes />} />
            <Route path="*" element={<LandingPage />} />

        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;

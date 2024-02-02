import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MyContainer from './components/MyContainer';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" exact element={<MyContainer/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



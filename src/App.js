// /src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import Header from './components/Header';
import MyContainer from './components/MyContainer';
import About from './components/About';
import i18n from './i18n';
import MyHOC from './components/MyHOC';
import MyComponent from './components/MyComponent';

const WrappedComponent = MyHOC(MyComponent);

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div>
          <Header />
          <WrappedComponent />
          <Routes>
            <Route path="/" exact element={<MyContainer/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </div>
      </Router>
    </I18nextProvider>
  );
};

export default App;




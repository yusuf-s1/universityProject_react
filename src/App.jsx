import { React, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SignIn from './pages/SignIn';
import University from './pages/University';
import Academic from './pages/Academic';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign" element={<SignIn />} />
          <Route path="/university" element={<University />} />
          <Route path="/academic" element={<Academic />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;

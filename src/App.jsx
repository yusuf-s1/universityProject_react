import { React, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SignIn from './pages/SignIn';
import University from './pages/University';
import Academic from './pages/Academic';
import Calendar from './pages/Calendar';
import NewsList from './pages/NewsList';
import News from './pages/News';
import NotFound from './pages/NotFound';

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
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/news">
            <Route index element={<NewsList />} />
            <Route path=":id" element={<News />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;

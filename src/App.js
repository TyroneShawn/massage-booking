import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import MasseusesPage from './components/MasseusesPage';
import BookingPage from './components/BookingPage';
import ProcessingPage from './components/ProcessingPage';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground dark:bg-primary-foreground dark:text-primary">
        <nav className="bg-zinc-800 dark:bg-primary text-white dark:text-primary-foreground p-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-zinc-400 dark:hover:text-primary">
            {t('Blissful Hands')}
          </Link>
          <div className="space-x-4">
            <Link to="/masseuses" className="hover:text-zinc-400 dark:hover:text-primary">{t('Masseuses')}</Link>
            <Link to="/booking" className="hover:text-zinc-400 dark:hover:text-primary">{t('Book')}</Link>
            <button onClick={toggleLanguage} className="hover:text-zinc-400 dark:hover:text-primary">
              {i18n.language === 'en' ? 'FR' : 'EN'}
            </button>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/masseuses" element={<MasseusesPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/processing" element={<ProcessingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

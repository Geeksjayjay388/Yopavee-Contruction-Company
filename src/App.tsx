import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home.tsx';
import Loader from './components/Loader.tsx';
import ContactModal from './components/ContactModal.tsx';
import { ContactProvider } from './context/ContactContext.tsx';

type TimeoutId = ReturnType<typeof setTimeout>;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timeoutId: TimeoutId | undefined;
    const handleLoad = () => {
      timeoutId = setTimeout(() => setIsLoading(false), 900);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <ContactProvider>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
      <Home />
      <ContactModal />
    </ContactProvider>
  )
}

export default App


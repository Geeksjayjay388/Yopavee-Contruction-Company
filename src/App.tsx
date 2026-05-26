import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home.tsx';
import Loader from './components/Loader.tsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timeoutId: number | undefined;
    const handleLoad = () => {
      timeoutId = window.setTimeout(() => setIsLoading(false), 900);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
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
    <>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
      <Home />
    </>
  )
}

export default App

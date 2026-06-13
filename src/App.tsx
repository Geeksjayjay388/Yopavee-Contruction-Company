import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home.tsx';
import Loader from './components/Loader.tsx';
import ContactModal from './components/ContactModal.tsx';
import { ContactProvider } from './context/ContactContext.tsx';

// Image assets imports for preloading
import logo from './assets/logo.png';
import hero from './assets/hero.png';
import heroDesktop from './assets/hero-desktop.png';
import stats from './assets/statsimages.png';
import beforeImg from './assets/before.png';
import afterImg from './assets/after.png';
import card1 from './assets/card1.png';
import card2 from './assets/card2.png';
import card3 from './assets/card3.png';
import card4 from './assets/card4.png';
import card5 from './assets/card5.png';
import card6 from './assets/card6.png';
import faqImg from './assets/faq.png';
import popupImg from './assets/popup.jpg';
import footerLogo from './assets/footerlogo.png';
import video from './assets/video.png';

const imagesToPreload = [
  logo,
  hero,
  heroDesktop,
  stats,
  beforeImg,
  afterImg,
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  faqImg,
  popupImg,
  footerLogo,
  video,
  'https://i.pravatar.cc/150?u=robert_williams'
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let active = true;
    let loadedCount = 0;
    const totalImages = imagesToPreload.length;

    const handleImageLoad = () => {
      if (!active) return;
      loadedCount++;
      const currentProgress = Math.round((loadedCount / totalImages) * 100);
      setProgress(currentProgress);

      if (loadedCount >= totalImages) {
        setTimeout(() => {
          if (active) setIsLoading(false);
        }, 600);
      }
    };

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Continue even if an image fails to load
    });

    return () => {
      active = false;
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
      <AnimatePresence>{isLoading && <Loader progress={progress} />}</AnimatePresence>
      <Home />
      <ContactModal />
    </ContactProvider>
  )
}

export default App


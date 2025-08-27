import { useEffect, useState } from 'react';
import 'animate.css';

export default function SplashScreen() {
  const texts = [
    "I Am Front-End Developer",
    "Hang tight, cool things coming your way!",
    "Welcome to my portofolio!"
  ];

  const [isVisible, setIsVisible] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setFade(false);
      }, 500);
    }, 2500);

    const hideSplash = () => {
      setIsHiding(true);
      clearInterval(interval);

      setTimeout(() => {
        setIsVisible(false);
      }, 700);

      window.removeEventListener('click', hideSplash);
      window.removeEventListener('scroll', hideSplash);
    };

    window.addEventListener('click', hideSplash);
    window.addEventListener('scroll', hideSplash);

    return () => {
      clearInterval(interval);
      window.removeEventListener('click', hideSplash);
      window.removeEventListener('scroll', hideSplash);
    };
  }, [texts.length]);

  if (!isVisible) return null;

  return (
    <div className={`w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-black z-50 transition-opacity duration-500 ${isHiding ? 'animate__animated animate__fadeOutUp' : ''}`}>
      <div className="text-center text-white">
        <img src="/assets/Logo.png" alt="Logo" className="mx-auto w-24 h-24 mb-6" />
        <p className={`text-xl font-semibold mb-2 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          {texts[currentTextIndex]}
        </p>
        <p className="text-sm mb-4 opacity-80">Click or scroll to continue</p>
        <div className="text-2xl animate-bounce">👇</div>
      </div>
    </div>
  );
}

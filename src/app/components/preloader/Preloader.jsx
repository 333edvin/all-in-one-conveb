'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null; // Return null to hide the preloader when loading is false
  }

  return (
    <div className="preloader fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="loader flex flex-col items-center">
        <Image src="/images/walk.gif" width={50} height={50} alt="preloader" />
        <p className='text-xs md:text-lg'>Loading...</p>
      </div>
      <footer className="fixed bottom-0 left-0 w-full bg-black text-white text-center py-2">
        <div className="flex justify-center items-center">
      <Image src="/images/logo.png" width={50} height={50} alt="preloader" />
      <p className="text-sm">Powered by CONVEB </p>
        </div>
    </footer>
    </div>
  );
}

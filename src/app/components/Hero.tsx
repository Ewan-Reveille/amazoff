"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const phrases = [
  'à petit prix',
  'à partir de chez vous',
  'de votre entreprise',
  'en vacances',
  'sur votre ordinateur',
  'sur votre téléphone',
];

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      const updatedText = isDeleting
        ? currentPhrase.substring(0, currentText.length - 1)
        : currentPhrase.substring(0, currentText.length + 1);

      setCurrentText(updatedText);

      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
        setTypingSpeed(50);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="relative h-[720px] w-full mb-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.png"
          alt="Image de fond avec un fleuriste"
          fill={true}
          priority={true}
          className='object-cover'
        />
      </div>

      <div className="relative z-10 flex items-center justify-start h-full text-left text-white px-6 md:px-20">
        <div>
          <h1 className="text-5xl font-extrabold">
            <span className="bg-black/50 px-2 py-1">Bienvenue chez Amazoff</span>
          </h1>
          <p className="text-2xl mt-4">
            <span className="font-semibold bg-black/50 pl-2 py-1">Vendez </span>
            <span className="font-semibold bg-black/50 pr-2 py-1">{currentText}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

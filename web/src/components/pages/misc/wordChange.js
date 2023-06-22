import React, { useState, useEffect } from "react";

export default function WordChange() {
  const words = [
    "Hello", // English
    "Hola", // Spanish
    "Bonjour", // French
    "Hallo", // German
    "Ciao", // Italian
    "Olá", // Portuguese
    "Привет", // Russian
    "こんにちは", // Japanese
    "你好", // Chinese (Mandarin)
    "안녕하세요", // Korean
    "مرحبا", // Arabic
    "नमस्ते", // Hindi
    "Hallo", // Dutch
    "Hej", // Swedish
    "Γειά σας", // Greek
    "Merhaba", // Turkish
    "Cześć", // Polish
    "Hei", // Norwegian
    "Hej", // Danish
    "Hei", // Finnish
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [words.length]);

  useEffect(() => {
    setCurrentWord(words[currentWordIndex]);
  }, [currentWordIndex, words]);

  return <h2 className="m-5">{currentWord}</h2>;
}

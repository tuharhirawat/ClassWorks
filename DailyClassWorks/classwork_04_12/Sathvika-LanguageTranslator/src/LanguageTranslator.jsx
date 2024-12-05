import React, { useState } from 'react';
import './App.css';
import InputForm from './InputForm';
import TranslationResult from './TranslationResult';
import translations from './translations.json'; // Import the mock translation data

function LanguageTranslator() {
  // State to store the input phrase, the translated phrase, and the selected language
  const [inputPhrase, setInputPhrase] = useState('');
  const [translatedPhrase, setTranslatedPhrase] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es'); // Default language is Spanish
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(null); // Add error state

  // Handle the input change
  const handleInputChange = (newPhrase) => {
    setInputPhrase(newPhrase);
  };

  // Handle the language selection change
  const handleLanguageChange = (event) => {
    setTargetLanguage(event.target.value);
  };

  // Handle form submission (fetch translation from mock data)
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true while waiting for the translation
    setError(null); // Reset error state

    try {
      // Normalize input to lowercase to make it case-insensitive
      const normalizedPhrase = inputPhrase.toLowerCase();

      // Check if the phrase exists in mock data
      const translated =
        translations[normalizedPhrase]?.[targetLanguage] || null;

      if (translated) {
        setTranslatedPhrase(translated); // Set the translated text from mock data
      } else {
        setError('Translation not found in mock data.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error: Unable to translate');
    }

    setLoading(false); // Set loading to false after the translation is completed
  };

  return (
    <div className="App">
      <h1>Language Translator</h1>

      {/* Pass handleInputChange, handleSubmit, handleLanguageChange as props to InputForm */}
      <InputForm
        inputPhrase={inputPhrase}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        onLanguageChange={handleLanguageChange}
        targetLanguage={targetLanguage}
      />

      {/* Pass the translatedPhrase, loading, and error props to TranslationResult */}
      <TranslationResult translatedPhrase={translatedPhrase} loading={loading} error={error} />
    </div>
  );
}

export default LanguageTranslator;

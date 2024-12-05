import React from 'react';

function InputForm({ inputPhrase, onInputChange, onSubmit, onLanguageChange, targetLanguage }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Enter a phrase:
        <input
          type="text"
          value={inputPhrase}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Type something..."
          required
        />
      </label>

      <label>
        Select target language:
        <select value={targetLanguage} onChange={onLanguageChange}>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
          <option value="ru">Russian</option>
          <option value="ar">Arabic</option>
        </select>
      </label>

      <button type="submit">Translate</button>
    </form>
  );
}

export default InputForm;

import React from 'react';

function TranslationResult({ translatedPhrase, loading, error }) {
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && translatedPhrase && (
        <>
          <h2>Translated Text:</h2>
          <p>{translatedPhrase}</p>
        </>
      )}
    </div>
  );
}

export default TranslationResult;

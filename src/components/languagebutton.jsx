import React from 'react';

function LanguageButton({ language, onClick }) {
  return (
    <button onClick={() => onClick(language)}>
      <img src={language.image} className={`logo ${language.className}`} alt={language.name} title={language.name} />
    </button>
  );
}

export default LanguageButton;

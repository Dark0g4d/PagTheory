import React, { useState } from 'react';
import './App.css';
import './index.css';

import viteLogo from "/vite.svg";
import reactLogo from "/react.svg";
import javascriptLogo from "/javascript.svg";
import pythonLogo from "/python.svg";
import csharpLogo from "/csharp.svg";
import cplusplusLogo from "/cplusplus.svg";
import rustLogo from "/rust.svg";
import rubyLogo from "/ruby.svg";

const languages = {
  vite: {
    name: 'Vite',
    description: 'Vite is a build tool for frontend development.',
    link: 'https://vitejs.dev/',
    className: 'item',
    logo: viteLogo,
  },
  react: {
    name: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    link: 'https://react.dev/',
    className: 'item',
    logo: reactLogo,
  },
  javascript: {
    name: 'JavaScript',
    description: 'JavaScript is a versatile scripting language.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
    className: 'item',
    logo: javascriptLogo,
  },
  python: {
    name: 'Python',
    description: 'Python is a versatile programming language known for its simplicity and readability.',
    link: 'https://www.python.org/',
    className: 'item',
    logo: pythonLogo,
  },
  csharp: {
    name: 'C#',
    description: 'C# is a statically typed, object-oriented programming language developed by Microsoft.',
    link: 'https://dotnet.microsoft.com/en/languages/csharp',
    className: 'item',
    logo: csharpLogo,
  },
  cplusplus: {
    name: 'C++',
    description: 'C++ is a powerful, high-performance programming language.',
    link: 'https://cplusplus.com/doc/tutorial/',
    className: 'item',
    logo: cplusplusLogo,
  },
  rust: {
    name: 'Rust',
    description: 'Rust is a systems programming language known for its safety and performance.',
    link: 'https://www.rust-lang.org/',
    className: 'item',
    logo: rustLogo,
  },
  ruby: {
    name: 'Ruby',
    description: 'Ruby is a dynamic, object-oriented programming language.',
    link: 'https://www.ruby-lang.org/en/',
    className: 'item',
    logo: rubyLogo,
  },
};

function App() {
  const [languageName, setLanguageName] = useState('Select a language');
  const [languageImage, setLanguageImage] = useState('');
  const [languageDescription, setLanguageDescription] = useState('');
  const [languageLink, setLanguageLink] = useState('');
  const [className, setClassName] = useState('');

  function changeLanguage(name, image, description, link, className) {
    setLanguageName(name);
    setLanguageImage(image);
    setLanguageDescription(description);
    setLanguageLink(link);
    setClassName(className);
  }

  return (
    <>
      <div className='banner'>
        <a href={languageLink} target='_blank' title='Official Website'>
          <img src={languageImage} className="logo logobanner" alt={languageName} />
        </a>
      </div>
      <h1>{languageName}</h1>
      <div>
        {Object.keys(languages).map((langKey) => (
          <button
            key={langKey}
            onClick={() => changeLanguage(languages[langKey].name, languages[langKey].logo, languages[langKey].description, languages[langKey].link, languages[langKey].className)}
          >
            <img src={languages[langKey].logo} className="logo logobanner" alt={`${languages[langKey].name}`} title={languages[langKey].name} />
          </button>
        ))}
      </div>
      <div className="container">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className={className}>
            <div>
              <article id="text"><p id='content'>{languageDescription}</p></article>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

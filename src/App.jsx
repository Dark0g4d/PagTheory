import React, { useState } from 'react';
import './App.css';
import './index.css'

import LanguageButton from './components/languagebutton'; // Create this component
import LanguageItem from './components/languageitem';     // Create this component

import viteLogo from "/public/vite.svg";
import reactLogo from "/public/react.svg";
import javascriptLogo from "/public/javascript.svg";
import pythonLogo from "/public/python.svg";
import csharpLogo from "/public/csharp.svg";
import cplusplusLogo from "/public/cplusplus.svg";
import rustLogo from "/public/rust.svg";
import rubyLogo from "/public/ruby.svg";

const languages = [
  {
    name: 'Vite',
    image: viteLogo,
    description: 'Vite is a build tool for frontend development.',
    link: 'https://vitejs.dev/',
    className: '.vitelogo',
  },
  {
    name: 'React',
    image: reactLogo,
    description: 'React is a JavaScript library for building user interfaces.',
    link: 'https://react.dev/',
    className: '.reactlogo',
  },
  {
    name: 'JavaScript',
    image: javascriptLogo,
    description: 'JavaScript is a versatile scripting language.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
    className: '.javascriptlogo',
  },
  {
    name: 'Python',
    image: pythonLogo,
    description: 'Python is a versatile programming language known for its simplicity and readability.',
    link: 'https://www.python.org/',
    className: '.pythonlogo',
  },
  {
    name: 'C#',
    image: csharpLogo,
    description: 'C# is a statically typed, object-oriented programming language developed by Microsoft.',
    link: 'https://dotnet.microsoft.com/en/languages/csharp',
    className: '.csharplogo',
  },
  {
    name: 'C++',
    image: cplusplusLogo,
    description: 'C++ is a powerful, high-performance programming language.',
    link: 'https://cplusplus.com/doc/tutorial/',
    className: '.cpluspluslogo',
  },
  {
    name: 'Rust',
    image: rustLogo,
    description: 'Rust is a systems programming language known for its safety and performance.',
    link: 'https://www.rust-lang.org/',
    className: '.rustlogo',
  },
  {
    name: 'Ruby',
    image: rubyLogo,
    description: 'Ruby is a dynamic, object-oriented programming language.',
    link: 'https://www.ruby-lang.org/en/',
    className: '.rubylogo',
  },
  // You can add more languages here
];

function App() {
  const [language, setLanguage] = useState({
    name: '',
    image: '',
    description: 'Select a language to learn more about it.',
    link: '',
    className: '',
  });

  function changeLanguage(newLanguage) {
    setLanguage(newLanguage);
  }

  return (
    <>
      <div className='banner'>
        <a href={language.link} target='_blank' title='Official Website'>
          <img src={language.image} className="logo logobanner" alt={language.name} />
        </a>
      </div>
      <h1>{language.name}</h1>
      <div>
        {languages.map((lang, index) => (
          <LanguageButton
            key={index}
            language={lang}
            onClick={() => changeLanguage(lang)}
          />
        ))}
      </div>
      <div>
        <p id='content'>{language.description}</p>
      </div>
      <div className="container">
        {Array.from({ length: 6 }, (_, index) => (
          <LanguageItem key={index} className={language.className} />
        ))}
      </div>
    </>
  );
}

export default App;

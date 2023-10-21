import React, { useState } from 'react';
import './App.css';

import viteLogo from "/vite.svg";
import reactLogo from "/react.svg";
import javascriptLogo from "/javascript.svg";
import pythonLogo from "/python.svg";
import csharpLogo from "/csharp.svg";
import cplusplusLogo from "/cplusplus.svg";
import rustLogo from "/rust.svg";
import rubyLogo from "/ruby.svg";

function App() {
  const [languageName, setLanguageName] = useState('');
  const [languageImage, setLanguageImage] = useState('');
  const [languageDescription, setLanguageDescription] = useState('Select a language to learn more about it.');
  const [languageLink, setLanguageLink] = useState('');
  const [className, setClassName] = useState('')

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
        <button onClick={() => changeLanguage('Vite', viteLogo, 'Vite is a build tool for frontend development.', 'https://vitejs.dev/', 'item')}>
          <img src={viteLogo} className="logo vitelogo" alt="Vite logo" title="Vite" />
        </button>
        <button onClick={() => changeLanguage('React', reactLogo, 'React is a JavaScript library for building user interfaces.', 'https://react.dev/', 'item')}>
          <img src={reactLogo} className="logo reactlogo" alt="React logo" title="React" />
        </button>
        <button onClick={() => changeLanguage('JavaScript', javascriptLogo, 'JavaScript is a versatile scripting language.', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', 'item')}>
          <img src={javascriptLogo} className="logo javascriptlogo" alt="JavaScript logo" title="JavaScript" />
        </button>
        <button onClick={() => changeLanguage('Python', pythonLogo, 'Python is a versatile programming language known for its simplicity and readability.', 'https://www.python.org/', 'item')}>
          <img src={pythonLogo} className="logo pythonlogo" alt="Python logo" title="Python" />
        </button>
        <button onClick={() => changeLanguage('C#', csharpLogo, 'C# is a statically typed, object-oriented programming language developed by Microsoft.', 'https://dotnet.microsoft.com/en/languages/csharp', 'item')}>
          <img src={csharpLogo} className="logo csharplogo" alt="C# logo" title="C#" />
        </button>
        <button onClick={() => changeLanguage('C++', cplusplusLogo, 'C++ is a powerful, high-performance programming language.', 'https://cplusplus.com/doc/tutorial/', 'item')}>
          <img src={cplusplusLogo} className="logo cpluspluslogo" alt="C++ logo" title="C++" />
        </button>
        <button onClick={() => changeLanguage('Rust', rustLogo, 'Rust is a systems programming language known for its safety and performance.', 'https://www.rust-lang.org/', 'item')}>
          <img src={rustLogo} className="logo rustlogo" alt="Rust logo" title="Rust" />
        </button>
        <button onClick={() => changeLanguage('Ruby', rubyLogo, 'Ruby is a dynamic, object-oriented programming language.', 'https://www.ruby-lang.org/en/', 'item')}>
          <img src={rubyLogo} className="logo rubylogo" alt="Ruby logo" title="Ruby" />
        </button>
      </div>
      <div>
        <p id='content'>{languageDescription}</p>
      </div>
      <div className="container">
        <div id="item-one" className={className}>  
            <div>
                <article id="text"></article>
            </div>
        </div>
        <div id="item-two" className={className}>
            <div>
                <article id="text"></article>
            </div>
        </div>
        <div id="item-three" className={className}>
            <div>
                <article id="text"></article>
            </div>
        </div>
        <div id="item-four" className={className}>
            <div>
                <article id="text"></article>
            </div>
        </div>
        <div id="item-five" className={className}>
            <div>
                <article id="text"></article>
            </div>
        </div>
        <div id="item-six" className={className}>
            <div>
                <article id="text"></article>
            </div>
        </div>
      </div>
    </>
  )
}

export default App;

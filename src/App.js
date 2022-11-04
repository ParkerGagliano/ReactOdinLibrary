import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddBookButton from './Components/AddBookButton';
import BookInput from './Components/BookInput';
import LibInterface from './Components/LibInterface';
import DisplayBook from './Components/DisplayBook';
function App() {

  let books = [{title: 'Harry Potter', author: 'Writer Person', pages: 312, read: true}, {title: 'Dune', author: 'Frank Herbert', pages: 222, read: true}, {title: 'Fahrenheit 451', author: 'Ray Bradbury', pages: 451, read: true}, {title: 'joe', author: 'mama', pages: 239, read: true},{title: 'joe', author: 'mama', pages: 239, read: true},{title: 'joe', author: 'mama', pages: 239, read: true},{title: 'joe', author: 'mama', pages: 239, read: true},{title: 'joe', author: 'mama', pages: 239, read: true},{title: 'joe', author: 'mama', pages: 239, read: true},{title: 'joe', author: 'mama', pages: 239, read: true},{title: 'joe', author: 'mama', pages: 239, read: true},{title: 'joe', author: 'mama', pages: 239, read: true}];




  return (
    <div className="App">
      <div className="container-fluid">
        <LibInterface books={books}></LibInterface>
      </div>
      <div className="container-large">
      </div>
      

    
      

      






      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </div>
  );
}

export default App;

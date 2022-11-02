import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddBookButton from './Components/AddBookButton';
import BookInput from './Components/BookInput';
import LibInterface from './Components/LibInterface';
function App() {
  let books = [{title: 'joe', author: 'mama', pages: 239, read: true}, {title: 'joe biden', author: 'mamanan a a', pages: 239, read: true}, {title: 'joe a', author: 'mama dsa s', pages: 239, read: true}, {title: 'joe', author: 'mama', pages: 239, read: true}]
  return (
    <div className="App">
      <LibInterface books={books}/>



      






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

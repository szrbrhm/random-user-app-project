
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <Header/>
      <Card />
      <Footer/>
    </div>
  );
}

export default App;

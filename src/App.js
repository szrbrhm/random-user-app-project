
import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Clarusway from './media/cw.svg';


function App() {
  return (
    <div className="App">
      <div>
      <img className="cw" src={Clarusway} alt=""/>
      </div>
      <Card />
      <Footer/>
    </div>
  );
}

export default App;

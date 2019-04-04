import React, { Component } from 'react';
import Nav from './components/nav';
import Jumbo from './components/jumbo';
import Pics from './components/pics';
import Footer from './components/footer';
import './App.css';
import './style/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Jumbo/>
        <Pics/>
        <Footer/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Us from './components/Us';
import Uploud from './components/Upload';
import Footer from './components/Footer';
import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Us resumeData={resumeData}/>
        <Uploud resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
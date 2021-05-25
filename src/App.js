import React, { Component } from 'react';
import './App.css';
import Header from './components/header';

// import Templates from './components/TemplateLists';


class App extends Component {
  state = {
  };

  render() { 
  
    return ( 
      <>
      <div className="body">
       
       <Header/>
      </div>
      
      </>
     );
  }
}
 
export default App;



import React, { Component } from 'react';
import './App.css';

import Templates from './components/TemplateLists';


class App extends Component {
  state = {
  };

  render() { 
  
    return ( 
      <>
      <div className="body">
       
       <Templates />
      </div>
      
      </>
     );
  }
}
 
export default App;



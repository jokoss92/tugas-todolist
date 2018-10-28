import React, { Component } from 'react';
import Counter from './components/Counter'
import './App.css';

class App extends Component {
 
  render() {
    return (
     <div>
       <Counter name="Lari"/>
       <Counter name="Makan"/>
       <Counter name="Minum"/>
       <Counter name="Tidur"/>
     </div>
    );
  }
}



export default App;

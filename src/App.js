import React, { Component } from 'react';
import logo from './logo.svg';
import HeaderClass from './components/Header'
import './App.css';

class App extends Component {
  state ={
    nama:'Popeye'
  };
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Selamat Datang, Joko Sarjono Slameto</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      
      <div>
      <HeaderClass nama={this.state.nama} kelas="10" />
      <HeaderClass nama="Agung" kelas="11" />
      <HeaderClass nama="Rudi" kelas="12" />
      <HeaderClass nama="Adi" kelas="13" />
      <HeaderClass nama="Rahmat" kelas="14" />
      </div>
    );
  }
}
// class Header extends Component{
//   render(){
//     return(
//       <div>
//         <h1>Ini Header</h1>
//       </div>
//     )
//   }
// }
// const Header =()=>{
//   return(
//     <h1>Ini Header Functional</h1>
//   )
// }


export default App;

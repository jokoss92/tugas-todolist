import React, { Component } from 'react';
import logo from './logo.svg';
import HeaderClass from './components/Header'
import './App.css';

class App extends Component {
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
      <HeaderClass nama="Joko" kelas="10" />
      <HeaderClass nama="Agung" kelas="10" />
      <HeaderClass nama="Rudi" kelas="10" />
      <HeaderClass nama="Adi" kelas="10" />
      <HeaderClass nama="Rahmat" kelas="10" />
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

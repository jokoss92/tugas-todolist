import React, { Component } from 'react';
class HeaderClass extends Component{
    // state ={
    //   angka: 1
    // };
    handleClick=()=>{
    alert("Kok diklik sih?");
    };
  
    render(){
      return (
       <div>
            <h1>Nama : {this.props.nama}</h1>
            <h1>Kelas : {this.props.kelas}</h1>
         
          <button onClick={()=>this.handleClick()}>Jangan Diklik!</button>
       </div>
      );
    }
  }

  export default HeaderClass;

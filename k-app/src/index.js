import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as BR, Route as R, Switch as S} from "react-router-dom";
import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('k_root')
// );

function App(){
  return(
      <div>
       <S>
         <R path="/info">
          <Detail/>
         </R>
         <R path='/login'>
          <Login/>
         </R>
         <R path="/">
          <Home/> 
         </R>
       </S>
      </div>
  );
}

function Home(){
  return <h3> K's home </h3>
}

function Detail(){
  return <h3> K's React </h3>
}

function Login(){
  return <h3> Login or Logout </h3>

}

ReactDOM.render(
  <BR>
    <App />
  </BR>,
  document.getElementById("kroot")
);






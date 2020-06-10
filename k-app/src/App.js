import React from 'react';
import { Component } from 'react';
//import logo from './logo.svg';
import poupou from './poupou.png';
import './App.css';


class App extends Component {

  onClickListener = () => {

    // import().then(

    // ).catch()

    import('./moduleK')
      .then(

      ({moduleK}) => {}
      
      ) /* using Promise*/
      .catch(

        err => {}

      );

  };

  render(){

    return(

      // <img src={poupou} /> className="" alt=""
     

      <div>

        <img src={poupou} alt=''/>

        <button onClick ={this.onClickListener}>
           click on me plz
        </button>

      </div>

    );

  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Karen's <code>src/App.js</code> ~
//         </p>
//         <a
//           className="App-link"
//           href="https://github.com/QueenieCplusplus?tab=repositories"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Karen's React App
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

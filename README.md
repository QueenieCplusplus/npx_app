# npx_app

* to replace create-react-app

        npm uninstall -g create-react-app
        npm install -g npx
        npx create-react-app my-app
        cd my-app
        npm start
    
    browse http://localhost:3000/
    

Creating a new React app in /Users/pintred/Desktop/k-app.
Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

* Code Split

https://create-react-app.dev/docs/code-splitting/

* Promise

        import React from 'react';
        import { Component } from 'react';

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
        
* Router

        import ReactDOM from 'react-dom';
        import {BrowserRouter as BR, Route as R, Switch as S} from "react-router-dom";

* Deploy on Server

https://create-react-app.dev/docs/deployment/


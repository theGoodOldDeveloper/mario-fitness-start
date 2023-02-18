/* ********************************
   ****    class v. hook        ***
   ******************************** */
import React from 'react'
import logo from './logo.svg';
/* import './App.css'; */

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World! 😋
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h6>
            made in susuSoft (2023)
          </h6>
          <h1>
            Hello React 😁
          </h1>
        </header>
      </div>
    );
  }

}

export default App;

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! 😋
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h6>
          made in susuSoft (2023)
        </h6>
        <h1>
          Hello React 😁
        </h1>
      </header>
    </div>
  );
}
 */
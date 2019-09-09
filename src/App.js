import React from 'react';
import './App.css';
import TerminalText from './components/terminal-text';

class App extends React.Component {
  state ={
  };

  render(){
    return(
      <div className="root" >
        <header className="intro-header color-secondary bg-color-primary">
          <div className="header__info" >
            <h1>Passionate about</h1>
            <TerminalText />
          </div>
          <div className="arrow-down bg-color-secondary"></div>
        </header>
        <section style={{ height: "200px" }} className="bg-color-secondary" >

        </section>
      </div>
    )
  }
}
App.propTypes = {
};
export default App;


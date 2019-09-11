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
            <h1>Hi!</h1>
            <TerminalText 
              terminalPath="@adan>&nbsp;"
              deleteSpeed={1000}
              breakBetween={1000}
              initialStart={1000}
              typingSpeed={2000}
              randmonIndexing={false}
              descriptions={["Web Apps", "Game Dev", "App Dev", "Automations", "Servers", "ReactJS", "NodeJS", "AI/ML/DL", "Tensor Flow", "Javascript", "CSS"]}
            />
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


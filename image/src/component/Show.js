// import logo from './logo.svg';
import '../css/Show.css';
import React from 'react';

class Show extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (

      <div className="Show">
          

            <div class="pacman-top">
          
            </div>
            <div class="pacman-bottom"></div>
            <div class="feed"></div>
            <p className= "LET" >GAME CENTER</p> 
            <p className= "Play">PLAY</p> 
            <p className= "Setting">SETTING</p> 
            <p className= "Exit">Exit</p> 
            {/* <p><a href="https://github.com/daleharvey/pacman" target="_blank">Credits: https://github.com/daleharvey/pacman</a></p> */}

      </div>



    );
  }
}

export default Show;

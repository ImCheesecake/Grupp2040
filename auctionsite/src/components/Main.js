import React, { Component } from "react";

export default class Main extends Component {
  render() {
    let testStyle = {
      textAlign: "center",
      fontFamily: "Montserrat",
      fontSize: "4em"
    };
<<<<<<< HEAD
    let headerStyle = {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    }
=======
    
>>>>>>> master
    return (
      <React.Fragment>
        
          <h1 style={testStyle}>Auction Site</h1>
          <div style={headerStyle}>
            <form>
              <input type="text" />
              <button type="submit">Search</button>
            </form>
          </div>
      </React.Fragment>
    );
  }
}

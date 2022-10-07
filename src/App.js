import React from "react";
import PersonCard from "./Componentes/PersonCard/PersonCard";


class App extends React.Component {

  render() {
    return(
      <div className="container">
        <br></br>
        <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
        <br></br>
        <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
        <br></br>
        <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
        <br></br>
        <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
      </div>
    );
  }

}



export default App;

import React from "react";

class PersonCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            age : this.props.age
        }
    }

    cumpleaños = () => {
        this.setState({age: this.state.age+1})
    }

    render() {

        const {firstName, lastName, hairColor} = this.props; /* Desestructurando componentes */

        return(
            <div className="col-6">
                <div className="card d-flex justify-content-evenly align-items-center">
                    <br/>
                    <h4>{lastName}, {firstName} </h4>
                    <p><b>Edad: </b>{this.state.age}</p>
                    <p><b>Hair Color: </b>{hairColor}</p>
                    <button className="btn btn-info col-7" onClick={this.cumpleaños}>Boton de cumpleaños {firstName} {lastName}</button>
                    <br/>
                </div>
            </div>
        );
    }
}

export default PersonCard;
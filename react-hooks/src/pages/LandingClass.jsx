import React from "react";
class LandingClass extends React.Component {
    state = {
        number : 1,
    };
    onChangeNumber = (props) => {
        if(props === "+"){
            if(this.state.number < 10){
                this.setState ({number: this.state.number + 1})
            }
        } else {
            if (this.state.number > 0)
            this.setState ({number: this.state.number - 1})
        }
    };
    render(){
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={() => this.onChangeNumber("-")}>-</button>
                <p></p>
                <button onClick={() => this.onChangeNumber("+")}>+</button>
            </div>
        )
    }
}
export default LandingClass;
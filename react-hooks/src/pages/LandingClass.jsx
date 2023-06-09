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
    componentDidMount(){
        console.log("Did Mount Running")
    }
    componentDidUpdate(){
        console.log("Did Update Running")
    }
    componentWillUnmount(){
        console.log("Are you sure?")
    }
    render(){
        console.log("Web Running")
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
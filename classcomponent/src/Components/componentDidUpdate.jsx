 

import React from "react";
class Update extends React.Component {
    constructor() {
        super()
        this.state ={
            color: "red",
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                color: "green",
            })
        }, 1000)        
    
    }
    componentDidUpdate() {
             document.getElementById("element").innerHTML = "the updated color is the " + this.state.color;
    }
    render() {
        return(
            <div>
                <h1> did update example</h1>
                <h2 id="element" > element color is: {this.state.color} </h2>       
            </div>                          

        )    
    }
}

export default Update;                   
    

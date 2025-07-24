import React from "react";

class Parent extends React.Component {
  render() {
    return(
        <div>
            <Child name="yuvraj" address="indore"></Child>
        </div>
    )
  }
}




class Child extends React.Component {   
    constructor(props){
        super(props)
            this.state = {
                name: "raghav",
                address: "khandwa",
            }; 
        
    }

    static getDerivedStateFromProps(props, state) {
            return {
                name: props.name,
                address: props.address
            }    
        }
    render() {
        return(
            <>
            <div>
                <h1> name is {this.state.name} </h1>
                <h1> name is {this.state.address} </h1>
            </div>
            </>
        )
    }
}

export default Parent;
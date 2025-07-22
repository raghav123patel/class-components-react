
import React from "react";
class Fetching extends React.Component{
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true,
            error: null,
        }
    };

    async componentDidMount() {
        console.log("component is mounted");
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log(data);
        this.setState({
           data:data,   
            loading: true,
            
        })
        console.log(...this.state.data);     
        this.setState({
            error: this.state.error,  
            loading: true ,
        })
        
    }
render(){
   return(
    <>
    <div>
        <h1> APIS DATA</h1>
        <h5> data is : {this.state.data.length}</h5>        
    </div>
    </>
   )
}
}

export default Fetching;
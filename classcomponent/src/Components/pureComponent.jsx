
import React from "react"
class Pure extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            course: "node js"
        }
    }
  handleClick = () => {
    this.setState({
        color: "node js"
    })
  } 
  

  render() {
    console.log("component is re-rendered again");          
    return(
        <>
        <h1> pure component example</h1>
        <button onClick={this.handleClick}> Click</button>
        <h1> color is : {this.state.color} </h1>
        </>
    )
  }

}

export default Pure;
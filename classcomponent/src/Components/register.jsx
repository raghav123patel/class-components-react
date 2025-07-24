import React from "react";

class Register extends React.Component{
    constructor() {
        super()
            this.state = {
               name: "",
               email: "",
               password: "",
               data: [],
               
            }
        }
        
        handleChange =(e) => {
            this.setState({
                ...this.state,
                [e.target.name] : e.target.value,
            })
            console.log(this.state);    
        }
        
        handleClick=(e)=> {
            //localStorage.setItem("data", JSON.stringify([{...this.state}]));
            e.preventDefault();
            const { name,email, password, data} = this.state
      
            
            const updatedData = [...data, {name, email, password}];
            this.setState({
                data: updatedData,
                name: "",
                email: "",
                password: "",
            })
            // const dataUpdate = [...this.state.data]
            // dataUpdate[this.state.editIndex] = {name, password}
            // console.log(dataUpdate);
            alert("data saved in the localstorage");
            
            localStorage.setItem("data", JSON.stringify(updatedData));
            
           
            
               
        }   
        handleDelete =(i) => {       
            console.log("gii");
            const updatedData1 = [...this.state.data]
            updatedData1.splice(i,1);
            this.setState({
                data: updatedData1,       
   
            })  
        

        }

        handleUpdate = (i) => {   
             const updateData = this.state.data[i];
             this.setState({
                name: updateData.name,
                password: updateData.password,
                editIndex: i,
             })
        }
        render() {
            return (
                <>
                <div>
        <h1> Register Page</h1>    

        <input type="text" placeholder="enter the name" name="name" value={this.state.name} onChange={this.handleChange} /> 
        <br />
        <input type="text" placeholder="enter the email" name="email" value={this.state.email} onChange={this.handleChange} /> 
        <br />
        <input type="password" placeholder="enter the password" name="password" value={this.state.password} onChange={this.handleChange} />    
        <br />
        <button onClick={this.handleClick}> Submit </button>
        </div>
        <div>
            <table border="1" cellPadding="6">  
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((user, index) => (
                        <tr key={index}>
                            <td> {user.name}</td>
                            <td> {user.email}</td>
                            <td> <button onClick={() => this.handleDelete(index)}>Delete</button></td> 
                            {/* <td> <button onClick={() => this.handleUpdate(index)}> Update </button></td> */}
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
        </>
            )
        }
    }
    export default Register;




    
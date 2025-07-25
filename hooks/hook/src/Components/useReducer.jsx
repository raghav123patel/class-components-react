import React from "react";
import { useReducer } from "react";

const initialState = {
    name: "",
    email: "",
    phoneNumber: "",
    submiitted: false,   
}

const formReducer = (state, action) => {   
    switch(action.type) {
        case "SET_NAME": 
        return {...state, name: action.payload};
        case "SET_EMAIL": 
        return {...state, email: action.payload};
        case "SET_PHONENUMBER": 
        return {...state, phoneNumber: action.payload};
        case "SUBMIT": 
        return {...state, submitted: true}
        default: 
        return state;
    }
}

    function Forms() {
            const [state, dispatch] = useReducer(formReducer, initialState);
            const handleSubmit = () => {  
            dispatch({type: "SUBMIT"});   
            console.log(state);

            }   
            return(
                <>
                <div>
                <input type="text" placeholder="enter the name" value={state.name} onChange={(e) => dispatch({ type: "SET_NAME" , payload: e.target.value }) } />  
                <br />
                <input type="text" placeholder="enter the email" value={state.email} onChange={(e) => dispatch({ type: "SET_EMAIL" , payload: e.target.value }) } />  
                <br />
                <input type="number" placeholder="enter the number" value={state.phoneNumber} onChange={(e) => dispatch({ type: "SET_PHONENUMBER" , payload: e.target.value }) } /> 
                <br />
                <button onClick={handleSubmit}> Submit </button> 
                {state.submitted && <p>Form Submitted!</p>}
                </div>
                </>
            )
    }

    export default Forms;



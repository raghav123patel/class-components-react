import { useState, useEffect } from "react";  


function UseMemoExample() {
    
    const [counter, setCounter] = useState(0);
    const [ number, setNumber] = useState(0);
    let values =0;
    function squareNumber(number){
        values = number * number;
        return values;
    }
    
    const numberValue = squareNumber(number);
    console.log(numberValue);
    const handleClick = () => {
        setCounter(counter + 1);   
    }   
    useEffect(() => {
        squareNumber();
    }, [number]);
    return(
        <>
        <div>
            <input type="number" placeholder="enter the number" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <h1> squared number is: {values} </h1>
            <button onClick={handleClick}> COUNT</button>
            <h1> counting is: {counter} </h1>
        </div>
        </>
    )
}
  
export default UseMemoExample;
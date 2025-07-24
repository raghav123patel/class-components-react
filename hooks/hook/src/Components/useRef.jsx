import { useState } from "react";
import { useRef } from "react";

function UseRefExample() {

    const [ count,  setCount] = useState(0);
    
    let val =  useRef(0);
    const handleClick = () => {
        val.current = val.current + 1;   
        console.log("value is", val);
        setCount(count + 1);   
    }


    return(   
        <>
        <div>
        <h1> use ref example </h1>
        <button onClick={handleClick}  > Click </button>      
        <h1> count is : {count} </h1>
        </div>
        </>
    )

}

export default UseRefExample;


// import { useState } from "react";
// import { useRef } from "react";

// function UseRefExampleTwo() {
//     const [ count, setCount] = useState(0);   
//     const btnRef = useRef();
//     const handleClick = () => {
//         setCount(count + 1);
//     }
//     const handleColor = () => {
//           btnRef.current.style.backgroundColor="green"
//     }
//     return(
//         <>  
//         <button ref={btnRef} onClick={handleClick} > Incremeent</button>
//         <button onClick={handleColor}> Color change</button>
//         </>
//     )
// }
// export default UseRefExampleTwo;
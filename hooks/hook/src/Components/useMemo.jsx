import React,{useState, useMemo} from "react";


export default function Memo(){

    const[count, setCount]= useState(0);
    const[dependentCount, setDependentCount]= useState(10);
    let result=0;

    function Calculate(){
        for(let i=0; i<1000; i++){
            result+=i;
        }
        console.log(result);
        return result;
    }

    let value= useMemo(Calculate,[dependentCount])

    
    return(
        <div>
          <button onClick={()=>setCount(count+1)}>IncreaseCount</button>
          <p>Count:{count}</p>
          <button onClick={()=>setDependentCount(dependentCount+1)}>IncreaseDependent</button>
          <p>Dependent Count:{dependentCount}</p>
        </div>
    )
}
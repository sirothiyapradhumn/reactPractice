import React,{useEffect, useState} from 'react'

function Ue3() {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState({sayHi:"I am Hooked"});

    useEffect(()=>{
        console.log("useEffect is called");
        document.title = `Btn clicked ${count} times`;
    }, [count]);

    console.log("render");
    
    let changeText = (e) => {
        msg.sayHi = e.target.value;
        console.log(msg);
        setMsg({...msg});
    }

  return (
    <div>
        <button onClick={()=> setCount(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count-1)}>-</button>

        <input type="text" value={msg.sayHi} onChange={(e)=>changeText(e)}></input>
    </div>
  )
}

export default Ue3;
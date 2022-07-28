import React,{useState, useEffect} from 'react'

function Infinite() {
    const [count, setCount] = useState(0);

    //componentDidMount + componentDidUpdate
    useEffect(()=>{
        console.log("useEffect is called");
        document.title = `Button clicked ${count} times`;
        //setCount(10); // will not run infinite bcoz state same rhega next time.

        //in this case it will run infinite
        // let num  = Math.random() * 100;
        // setCount(num);
    })

    console.log("render");
  return (
    <div>
        <button onClick={()=> setCount(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count-1)}>-</button>
    </div>
  )
}

export default Infinite;
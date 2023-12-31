import React,{useState, useEffect} from "react";


const CounterA = React.meomo(({count})=>{
    useEffect(()=>{
        console.log(`CounterA update - count: $(count)`)
    })
    return <div>{count}</div>
});

const CounterB = React.memo(({obj})=>{
    useEffect(()=>{
        console.log(`CounterB update - count: $(obj.count)`)
    })
    return <div>{obj.count}</div>
});
const OptimizeTest = () => {

    const [count,setCount] = useState(1);
    const [obj,setObj] = useState({
        count: 1
    });

    return <div style={{ padding:50 }}>
        <div>
            <h2>Counter A</h2>
            <CounterA count={count} />
            <button onClick={()=>setCount(count)}>A button</button>
        </div>
        <div>
            <h2>Counter B</h2>
            <CounterB obj={obj} />
            <button onClick={()=>setObj({
                count: obj.count
            })}>B button</button>
        </div>
    
    </div>
};

export default OptimizeTest
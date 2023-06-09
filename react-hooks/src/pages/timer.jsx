import { useState } from "react";

export default function Timer (){
    let [count, setCount] = useState(0);
    function setMax(){
        if(count < 10){
            setCount(count = count + 1);
        } 
    }
    function setMin(){
    if (count > 0){
            setCount(count = count - 1)
        }
    }
    function full(){
        if (count >= 10){
            <h1>Is FULL</h1>
        }
    }
    return (
        <div className="bungkus">
        <button onClick={() => setMin()} className="kurang"></button><span className="nilai">{count}</span><button onClick={() => setMax()} className="tambah"></button>
        <h1>{full}</h1>
        </div>
    )
}
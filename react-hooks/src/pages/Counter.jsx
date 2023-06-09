import { useState } from "react";

export default function Counter(value, step) {
    const [count, setCount] = useState(value)
    function increment(){
        setCount(count+step)
    }
    function decrement(){
        setCount(count-step);
    }
    return [count,increment,decrement]
}
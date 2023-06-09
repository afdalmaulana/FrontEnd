import { useRef, useState, useEffect } from "react";

export default function LandingJs (){
    // top level adalah antara function dan return, tidak boleh dalam loop dan nested function
    const [count, setCount] = useState(0)
    const [input, setInput] = useState("");
    useEffect(() => {
        // console.log (`You Clicked ${count} times`)
        console.log(`You input ${input}`)
    })
    const name = useRef();
    // useRef biasa digunakan untuk mengambil input string
    // useRef name.current.value untuk mengambil isi => apabila cuman name maka outputnya akan object
    return (
        <div>
            <p>
                Mas Belai aku sebanyak {count} AHHHH
            </p> 
            <button onClick={() => setCount(count+1)}>Belai Aku MAS</button>
            <button onClick={() => setCount(count-1)}>Kurangin mas</button>
            <div>
                <input type="text" ref={name} placeholder="Input Name"/>
                <button onClick={() => setInput(name.current.value)}>Submit</button>
                <h1>{input}</h1>
            </div>
        </div>
    )
}
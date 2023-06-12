// import React, { useState } from "react";

export default function Calculator(){
//   const [num1, setNum1] = useState();
//   const [num2, setNum2] = useState();
  //   menggunakan useState()

//   const handleOnChange1 = (element) => {
//     setNum1(+element.target.value);
//   };

//   const handleOnChange2 = (element) => {
//     setNum2(+element.target.value);
//   };

    function increment(){
    // menggunakan DOM
    // dengan menambahkan simbol + didepan document.getElementById(namaId).value
    // maka akan mengubah string menjadi number
    let num1 = +document.getElementById("num-1").value;
    let num2 = +document.getElementById("num-2").value;
    document.getElementById("result").textContent = num1 + num2;
    };
    function decrement(){
        let num1 = +document.getElementById("num-1").value;
        let num2 = +document.getElementById("num-2").value;
        document.getElementById("result").textContent = num1 - num2;
    }
    function river(){
        let num1 = +document.getElementById("num-1").value;
        let num2 = +document.getElementById("num-2").value;
        document.getElementById("result").textContent = num1 * num2;
    }
    function bagi(){
        let num1 = +document.getElementById("num-1").value;
        let num2 = +document.getElementById("num-2").value;
        document.getElementById("result").textContent = num1 / num2;
    }


  return (
    <div>
        <input id="num-1" type="number"/>
        <input id="num-2" type="number"/>

        {/* coding di bawah menggunakan useState */}
      {/* <input
        id="num-1"
        type="number"
        onChange={(element) => handleOnChange1(element)}
      /> */}
      {/* <input
        id="num-2"
        type="number"
        onChange={(element) => handleOnChange2(element)}
      /> */}
      <button onClick={increment}>+ Tambah</button>
      <button onClick={decrement}>- Kurang</button>
      <button onClick={river}>* Kali</button>
      <button onClick={bagi}>/ Bagi</button>
      <button>% Modulo</button>
      <button>** Pangkat 2</button>
      <p>Result here</p>
      <h1 id="result">Hasil</h1>
    </div>
  );
};
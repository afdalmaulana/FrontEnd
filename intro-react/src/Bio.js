export default function Bio(){
    return(
        <div className="Bio"> 
        <p>
        <label> Name :  </label>
            <input type="text" placeholder="Username" className="namee"></input>
        </p> <p>
        <label> Price :  </label>
        <input type="number" placeholder="Price" className="num"></input> </p>
        <p>
            <label>Condition</label>
            <input type="radio" className="new"/>New
            <input type="radio" className="sec"/>Second
        </p>
        <p>
            <label>Warehouse</label>
            <select>
                <option>JKT</option>
                <option>MKS</option>
                <option>YGY</option>
            </select>
        </p>
        <p>
            <label>Courier</label>
            <input type="checkbox"className="kurir"/>JNE
            <input type="checkbox"/>JNT
            <input type="checkbox"/>RX King balap
        </p>
        </div>
    )
}
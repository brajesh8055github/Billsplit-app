import { useState, useRef } from "react";


function BillSplit() {
    const [splitBill, setSplitBill] = useState(0);
    const amount = useRef(0);
    const person = useRef(0);
    function splitBillHandler() {
        const amountData = amount.current.value;
        const personData = person.current.value;
        let bill = (amountData / personData).toFixed(2);
        setSplitBill(bill);
        console.log(amountData, personData)
    }
    return (
        <div className="bill">
            <h2>BillSplit App</h2>
            <input placeholder='Enter the amount' ref={amount}></input>
            <input placeholder='Enter the person' ref={person}></input>
            <button onClick={splitBillHandler} className="btn-s">Split</button>
            <div className="desc">
            <p>Amount Per Person</p>
            <h3>₹ {splitBill}</h3>
            </div>
        </div>
    )
}
export default BillSplit;
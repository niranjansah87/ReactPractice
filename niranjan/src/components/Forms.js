// import React   from 'react'
import React, { useState } from 'react';
export default function Forms() {
    // const [text, setText] = useState('Enter text here');
    const handleSubmit = () => {
        let newText = text.toUpperCase();
        setText(newText);
        alert('Form Submitted');
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('  Enter text here ');
    return (
        <>
            <div className="container">
                <h1>Niranjan</h1>
                <div className="mb-3">
                    <textarea value={text} onChange={handleOnChange} id="myBox" cols="30" rows="10" className="form-control"></textarea>
                </div>

                <button className="btn btn-primary" onClick={handleSubmit}>Convert to UpperCase</button>
            </div>
            <div className="container my-2">
            <h1>Your Text summary</h1>
            <p>5552 words,5545 characters</p>

            </div>

        </>
    )
}

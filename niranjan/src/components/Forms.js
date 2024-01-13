// import React   from 'react'
import React, { useState } from 'react';
export default function Forms() {
    // const [text, setText] = useState('Enter text here');
    const handleSubmit = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // alert('Form Submitted');
    }
    const handleSubmit2 = () => {
        let newText = text.toLowerCase();
      
        setText(newText);
        alert('Form Submitted');
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <h1>Niranjan</h1>
                <div className="mb-3">
                    <textarea  onChange={handleOnChange} id="myBox" cols="30" rows="10" className="form-control"></textarea>
                </div>

                <button className="btn btn-primary" onClick={handleSubmit}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleSubmit2}>Convert to Lowercase</button>
            </div>
            <div className="container my-2">
            <h1>Your Text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>

            </div>

        </>
    )
}

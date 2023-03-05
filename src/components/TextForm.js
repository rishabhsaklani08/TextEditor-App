import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Example: Hey! Start typing your text here to covert it to uppercase.")

    const convertUpper = () => {
        let newText = text.toUpperCase();
        setText(newText)
        if (text.split("").length <= 0) {
            props.showAlert('Enter some text first!', 'danger');
        } else {
            props.showAlert('Text converted to Uppercase!', 'success');
        }
    }

    const convertLower = () => {
        let newText = text.toLowerCase();
        setText(newText)
        if (text.split("").length <= 0) {
            props.showAlert('Enter some text first!', 'danger');
        } else {
            props.showAlert('Text converted to Lowercase!', 'success');
        }
    }

    const clearText = () => {
        let newText = "";
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const copyText = () => {
        let newText = document.getElementById('myBox')
        newText.select()
        navigator.clipboard.writeText(newText.value)
        if (text.split("").length <= 0) {
            props.showAlert('No text to copy!', 'danger');
        } else {
            props.showAlert('Text has been copied to clipboard!', 'success');
        }

    }

    const removeSpaces = () => {
        let newText = text.split(/[ ] + /)
        setText(newText.join(' '))
        if (text.split("").length <= 0) {
            props.showAlert('Enter some text first!', 'danger');
        } else {
            props.showAlert('All the extra spaces has been removed!', 'success');
        }
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <h1>{props.heading}</h1>

                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} Words & {text.length} Characters</p>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgrounColor: props.mode === 'light' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-danger mx-1 my-2" onClick={clearText}>Reset</button>
                <button className="btn btn-primary mx-1" onClick={convertUpper}>Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={convertLower}>Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={removeSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
            </div>
            <div className="container">

            </div>
        </>
    )
}

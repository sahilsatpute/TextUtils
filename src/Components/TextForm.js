import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase Click");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Upper Case", "success");
    }

    const handleLowClick = ()=>{
        // console.log("LowerCase Click");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lower Case", "success");
    }

    const handleClear = ()=>{
        // console.log("LowerCase Click");
        let newText = '';
        setText(newText);
        props.showAlert("Text Has Been Cleared", "success");
    }

    const handleCopy = ()=>{
        let newText = document.getElementById("myBox");
        newText.select();
        newText.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Has Been Copied", "success");
    }


    const handleOnChange = (event) =>{
        // console.log("Handle Change")
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#041526'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" rows="8" 
                onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#041526'}}> </textarea>
            </div>

            <button type="button" className="btn btn-success mx-2" onClick={handleUpClick} >
             Convert to UpperCase
            </button>

            <button type="button" className="btn btn-success mx-2" onClick={handleLowClick}>
            Convert to LowerCase
            </button>

            <button type="button" className="btn btn-success mx-2" onClick={handleClear}>
            Clear
            </button>

            <button type="button" className="btn btn-success mx-2" onClick={handleCopy}>
            Copy
            </button>

        </div>

        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#041526'}}>
            <h1>Your Text Summary is</h1>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in above text area"}</p>
        </div>
        </>

    );
}

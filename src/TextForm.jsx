import React, { useState } from 'react'
export default function Textform()
// for btn function
{
    const [text, setState] = useState("Enter text here")

    const convertUppercase = () => {
        // console.log("Uppercase was click")
        let newText = text.toUpperCase();        // is a javascript function
        setState(newText)
    }

    const convertLowerCase = () => {
        let newText = text.toLowerCase();
        setState(newText)
    }

    const clearAll = () => {
        let newText = ' ';
        setState(newText)
    }

    const onchangeFunction = (event) => {
        setState(event.target.value);

    }

    // for dark mode
    const [mystyle, setmystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btntext, setbtntext] = useState('Enable Dark Mode')
    const toggleStyle = () => {
        if (mystyle.color === 'black') {
            setmystyle(
                {
                    color: 'white',
                    backgroundColor: 'black'
                }
            )
            setbtntext("Enable light mode")
        } else {
            setmystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtntext("Enable dark mode")
        }
    }

    return (
        <><div  style={mystyle}>
            <div className="container " >
                <h2>Enter the text to analyze below</h2>

                <div className="container my-4 ">
                    <button className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
                </div>

                <div className="container mb-3" >
                    <textarea style={mystyle} className="form-control" value={text} onChange={onchangeFunction} id="textbox" rows="8"></textarea>
                </div>
                <div className="container">
                    <button className="btn btn-primary ml-1" onClick={convertUppercase}>Convert to Uppercase</button>
                    <button className="btn btn-primary m-4" onClick={convertLowerCase}>Convert to lowerCase</button>
                    <button className="btn btn-primary" onClick={clearAll}>clear all</button>
                </div>
            </div>
            <div className="container">
                
                <p>{text.split(" ").length} words and {text.length} charactors in textArea</p>
                <p>{0.008 * text.split(" ").length} minute to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
        </>
    )
}

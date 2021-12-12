import React, {useState}  from 'react'

export default function Mycards() {
    const [style, setstyle] = useState(
        {
            color: 'black',
            backgroundColor: 'White'
        })
        const [, set] = useState(initialState)

    return (
        <div>
            <div className="container my-4" >
                <div className="card">
                    <div className="card-header" >
                        About
                    </div>
                    <img src="logo512.png" height="400px" width="400px" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Shreyash Mohan KOlhe</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
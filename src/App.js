import './App.css';
import React, { useState } from 'react';
import Table from './Table';

const App = () => {
  const [note, setNote] = useState("");
  const [btn, setBtn] = useState([]);

  const inputEvent = (event) => {
    setNote(event.target.value);
  }

  const btnClick = () => {
    setBtn((preValue) => {
      return [...preValue, note]
    });
    setNote('');
  }

  const delBtn = (id) => {
    // alert("i am click")
    setBtn((oldItem) => {
      return oldItem.filter((arrEle, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
    <div className='container my-3'><h1>Note App</h1></div>
    <div style={{ width: "50%" }} className="container">
    
      <div className="card-body">
        <div className="container">
          <>
            <div className="mb-3 ">
              <label htmlFor="note" className="form-label">Enter Note...</label>
              <input type="text" value={note} onChange={inputEvent} className="form-control" id="note" aria-describedby="emailHelp" />
            </div>
            <button type="submit" onClick={btnClick} className="btn btn-primary">Submit</button>
          </>
        </div>
      </div>
    </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">items</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            
            {btn.map((oldValue, index) => {
              return <Table
                key={index}
                id={index}
                text={oldValue}
                btnV={delBtn}
              />
            })}
          </tbody>
        </table>
      </div>
    </>

  );
}

export default App;
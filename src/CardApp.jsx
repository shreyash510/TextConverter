import React from "react";
import { useState } from "react/cjs/react.development";
import List from "./List";
// import List from "./List";
const CardApp = () => {
    const [txt, setTxt]=useState('');
    const [btn, setBtn]=useState([]);
    const inputevent=(e)=>{
        setTxt(e.target.value);
    }
    const btnClick = () => {
        setBtn((preV)=>{
            return[...preV, txt];
        });
        console.log(txt)
        setTxt('');        
    }
    const delItem=(id)=>{
        setBtn((oldV)=>{
            return oldV.filter((arrEle, index)=>{
                return index !== id;
            })
        })
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div"><br />
                    <h1>ToDo List</h1><br />
                    <input value={txt} type="text" onChange={inputevent} name="txt" placeholder="Add a Items" />
                    <button onClick={btnClick}  >+</button>
                    <div className="todo_style">
                        {btn.map((element,index)=>{
                            return <List 
                                        key={index}
                                        id={index}
                                        txt ={element}
                                        onSelect={delItem}
                                    />
                        })}
                    
                    </div>
                </div>
            </div>
        </>
    );
};
export default CardApp;

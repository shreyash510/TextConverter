
import React from 'react'

export default function Table(props) {
    return (
        <>
            <tr>
                <th>{props.id +1}</th>
                <td>{props.text}</td>
                <td><but className="btn" onClick={()=>{
                props.btnV(props.id);
            }}>❌</but></td>
            </tr>
        </>
    )
}
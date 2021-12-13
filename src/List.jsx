import React from "react";
const List = (props) => {
    return (
        <>
                <table className="border-none my-4">
                    <tbody>
                        <tr>
                            <td><li>{props.txt}</li></td>
                            <td><div onClick={()=>{
                                props.onSelect(props.id);
                            }}style={{cursor:'pointer'}} className="btn" >❌</div></td>
                        </tr>
                    </tbody>
                </table>
        </>
    )
}
export default List;
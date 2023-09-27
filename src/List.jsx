import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useState } from "react";




const List =(props)=>{

    

    const [line, setLine] = useState (false);

    const cutIt =()=>{
        setLine(true)

        };

    return(
    <><div className="todo-style" >
            <span onClick={cutIt}>
                {''}
                <DeleteOutlineIcon className="delete"/>{''}
            </span>
            <li style={{ textDecoration: line ? "line-through" : "none" }}> {props.text} </li>
        </div></>
    
    );
}
export default List;
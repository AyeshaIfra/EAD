import React from "react";

export function StudentCard(props) {
    return(
        <div style={{
            border:"1px gray solid",
            width:"250px",
            boxShadow:"0 2px 8px rgba(0,0,0,0.2)"
        }}>
            <img src={props.image} width="250" height="250"  style={{borderRadius:"50%"}}/>
            <h2>{props.name}</h2>
            <p><strong>Branch:</strong>{props.branch}</p>
            <p><strong>Year:</strong>{props.year}</p>
        </div>
    )
}
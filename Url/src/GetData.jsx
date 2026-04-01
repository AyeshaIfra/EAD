import React,{useState,useEffect} from "react";
import "./GetData.css"

const GetData=()=>{
    const [get,setGet]=useState([]);

    const URL="https://jsonplaceholder.typicode.com/users";

    const apiCalls=async(call)=>{
        try{
            const res=await fetch(URL);
            const data=await res.json();
         
            console.log(data); 
               setGet(data); 
        }
        catch(err) {
            console.error(err);
        }
    };

    useEffect (()=>{
        apiCalls();
    },[])
    return (
        <div className="container">
            {
                get.map((Item)=> {
                    return (
                        <div className="card" key={Item.id}>
                        <div>
                            <h2>{Item.name}</h2>
                            <h2>{Item.username}</h2>
                            <h2>{Item.email}</h2>
                            <h2>{Item.phone}</h2>
                            <h2>{Item.website}</h2>
                        </div>

                        <div>
                            <h2>Company:</h2>
                            <p>{Item.company.name}</p>
                        </div>
            
                        </div>
                    );
                },[])
                }
        </div>
    );
};

export default GetData;

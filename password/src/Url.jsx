import React,{useState,useEffect} from 'react'

const urldata="https://jsonplaceholder.typicode.com/posts";


const Url=()=>{

const [get,setGet]=useState([]);

const api=async ()=>{
    const res=await fetch(urldata);
    const data=await res.json();
    console.log(data);
    setGet(data);
}
     useEffect(()=>{
        api();
    },[]);

    return (
        <div>
            <div className='container'>
            {
            get.map((i)=>(
                <div className="card" key={i.id}>
                <h2>{i.userId}</h2>
                <h2>{i.id}</h2>
                <h2>{i.title}</h2>
                <h2>{i.body}</h2>
                </div>
            ))}
            
            </div>
        </div>
    )
   

}
export default Url;
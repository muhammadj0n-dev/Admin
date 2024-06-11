import axios from 'axios'
import React from 'react'
import "./index.css"
import { useEffect, useState } from 'react'
const index = () => {
    const [comments,setaComment] = useState([])
    const [page,setPage] = useState(1)
    const [limit,setLimit] = useState(20)

    useEffect( ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`).then(result =>{
        setaComment(result.data)
        })
    },[page ,limit])
    const handleClick = (type)=>{
        if(type === "prew"){
            if( page > 1){
                setPage(page => page -1)
            }
        }else{
            setPage(page => page+1)
        }
    }
  return (
   <>
                <div className="row">
                    <div className="col-md-4">
                        <select onChange={(e)=>setLimit(e.target.value)} className='form form-control my-2'>
                            <option selected>Select Limit</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                {
                    comments.map((item,index)=>(
                        <div key={index} className="comments col-12 col-md-6 mb-4">
                        <div className="comment_top">
                        <box-icon name='user-circle'></box-icon>
                        <h1>{item.email}</h1>   
                        <div className="comment_tr">
                                <b>{item.id}</b>
                            </div>      
                        </div>
                        <div className="comment_bottom">
                            <p>{item.body}</p>
                        </div>
                        </div>
                    ))
                      
                }
                 </div>
                    <div className="d-flex justify-content-center gap-3">
                    <button onClick={()=>handleClick("prew")}>Prew</button>
                    {page}
                    <button onClick={()=>handleClick("next")}>Next</button>
                </div>
               
        
   </>
  )
}

export default index
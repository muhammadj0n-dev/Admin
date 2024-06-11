import { useEffect ,useState } from 'react'
import axios from 'axios'


const index = () => {
  const [todo,setTodo] =useState([])
  const [page,setPage] =useState(1)
  const [limit,setLimit] =useState(12)
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`).then(response=>{
        console.log(response);
        setTodo(response.data.slice(0,40))
      });
    }, [page ,limit]);

    const handleClick =(type)=>{
      if(type === "prew"){
        if(page > 1){
          setPage((page)=> page-1)
        }
      }
      else{
        setPage((page)=> page + 1)
      }
    }
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <select onChange={(e)=>setLimit(e.target.value)} className=" form form-control my-2">
            <option selected>Select Limit</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
        </div>
      </div>
      <table className='table table-bordered table-hover table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>userId</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {
            todo.map((item,index)=>(
              <tr key={index}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.completed? 'Completed' : 'No Completed'}</td>
            </tr>
            ))
          }
        </tbody>
      </table>
      <div className="d-flex align-items-center gap-3">
        <button onClick={()=>handleClick("prew")}>Prew</button>
        {page}
        <button onClick={()=>handleClick("next")}>Next</button>
      </div>
    </div>
    </>
  )
}

export default index;

import { useEffect ,useState } from 'react'
import axios from 'axios'


const index = () => {
  const [users,setUser] =useState([])
  const [page,setPage] = useState(1)
  const [limit,setLimit] = useState(10)
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`).then(response=>{
        console.log(response);
        setUser(response.data)
      });
  }, [page ,limit]);
  const handleClick =(type)=>{
  if(type === "prew"){
    if(page > 1){
      setPage(p => p-1)
    }
  }else{
    setPage(p => p+1)
  }
  }
  return (
    <>
    <div className="row">
      <div className="col-md-4">
        <select onChange={(e)=>setLimit(e.target.value)} className='form form-control my-2'>
          <option selected>Select Limit</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
      <table className='table table-bordered table-hover table-striped'>
        <thead>
          <tr>
            <th>T/R</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Website</th>
            <th>Email</th>
            <th>Adrres</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item,index)=>(
              <tr key={index}>
              <td>{index +1}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.username}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address.city}</td>
              <td>{item.company.name}</td>
            </tr>
            ))
          }
        </tbody>
      </table>
      <div className="btn d-flex align-items-center gap-3">
        <button onClick={()=>handleClick("prew")}>Prew</button>
        {page}
        <button onClick={()=>handleClick("next")}>Next</button>
      </div>
    </>
  )
}

export default index;
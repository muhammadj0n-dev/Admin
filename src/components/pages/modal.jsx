import { useState } from "react";
import {nanoid} from "nanoid"
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap"
const UserModal = (props) => {
    const [form,setForm] = useState({});
    const {cars , setCars , toggle ,car , open} = props
    const handleChange =(event)=>{
        const {name,value} = event.target;
        setForm({...form ,[name]:value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(car.id){
            let new_Cars = cars.map((item)=>{
                if(item.id === car.id){
                    item.name = form.name ? form.name : item.name
                    item.price = form.price ? form.price : item.price
                    item.year = form.year ? form.year : item.year
                    item.color = form.color ? form.color : item.color
                    item.brand = form.brand ? form.brand : item.brand
                }
                return item
               
            })
            setCars(new_Cars)
        }else {
        let id = nanoid();
        const payload ={...form , id}
        cars.push(payload);
        setCars([...props.cars])
        }
        toggle()
    }
  return (

  <Modal isOpen={open} toggle={toggle}>
    <ModalHeader>
        <h1 className="text-center">ADD USER</h1>
    </ModalHeader>
    <ModalBody>
        <form onSubmit={handleSubmit} id="form" className="d-flex gap-3 flex-column">
            <input type="text" placeholder="Name"  defaultValue={car.name}  name="name" className="form form-control"  onChange={handleChange}/>
            <input type="number" placeholder="Price" defaultValue={car.price}  name="price"  className="form form-control" onChange={handleChange} />
            <input type="text" placeholder="Brand" defaultValue={car.brand} name="brand"  className="form form-control" onChange={handleChange} />
            <input type="date" placeholder="Year"   defaultValue={car.year} name="year" className="form form-control" onChange={handleChange} />
            <input type="text" placeholder="Color"  defaultValue={car.color}  name="color" className="form form-control" onChange={handleChange} />
        </form>
    </ModalBody>
    <ModalFooter>
        <button type="exit" onClick={toggle} className="btn btn-danger">Cancel</button>
        <button  type="submit" form="form" className="btn btn-success" >ADD USER</button>
    </ModalFooter>
  </Modal>
  )
}

export default UserModal;
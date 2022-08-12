import React, { useState } from 'react'
import "./App.css"

function App() {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [employee, setEmployee] = useState([]);

  const AddEmployee = () => {
    setEmployee([...employee,{id:id, name:name, role:role, empid:(employee.length+1)}]);
    setId("");
    setName("");
    setRole("");
  }

  const DeleteEmployee = () => {
      setEmployee([]);
  }

  const deleteEmployee = (id) => {
    const newEmp = employee.filter(e=> e.empid !== id);
    setEmployee(newEmp);
  }

  return (
    <div>
      <fieldset>
        <legend><h3>Employee Management</h3></legend>
        <div className='form-group'>
          <input type="number" placeholder="Enter Id" required value={id} onChange={e=>setId(e.target.value)}/> <br/>
          <input type="text" placeholder="Enter Name" required value={name} onChange={e=>setName(e.target.value)}/> <br/>
          <input type="text" placeholder="Enter Role" required value={role} onChange={e=>setRole(e.target.value)}/> <br/>
          <button onClick={AddEmployee}>Add</button> <br/>
          <button onClick={DeleteEmployee}>Delete All</button>
        </div>
      </fieldset>

    {employee.map((emp,i)=>{
      return(
        <div className='form-group' key={i}>
            {emp.id}  {emp.name}  {emp.role} <button onClick={() => {deleteEmployee(emp.empid)}} className="XbuT">X</button>
        </div>
      )
    })}
    </div>
  )
}

export default App
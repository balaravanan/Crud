import React, { useState } from 'react'
import "./App.css"

function App() {

  const[id, setId] = useState("");
  const[name, setName] = useState("");
  const[role, setRole] = useState("");
  const[employee, setEmployee] = useState([]);

  const addEmployee = () => {
    setEmployee([...employee,{id:id,role:role,name:name,empId:(employee.length+1)}]);
    setId("");
    setName("");
    setRole("");
  }

  const deleteAll = () => {
    setEmployee([]);
  }

  const deleteEmployye = (id) => {
      const newEmp = employee.filter((e)=>e.empId != id);
      setEmployee(newEmp);
  }
  return (
    <div>
      <fieldset>
        <legend><h3>Employee Management</h3></legend>
        <div className='form-group'>
          <input type="number" placeholder='Enter Id' value={id} onChange={e=>setId(e.target.value)}/> <br/>
          <input type="text" placeholder='Enter Name' value={name} onChange={e=>setName(e.target.value)}/> <br/>
          <input type="text" placeholder='Enter Role' value={role} onChange={e=>setRole(e.target.value)}/> <br/>
          <button onClick={addEmployee}>Add</button> <br/>
          <button onClick={deleteAll}>Delete All</button>
        </div>
      </fieldset>  

      { employee.map((emp,i)=>{
        return (
        <div className='form-group'>
          {emp.id}  {emp.name}  {emp.role} <button onClick={()=>{deleteEmployye(emp.empId)}} className="XbuT">x</button>
        </div>
      )
      })}    
    </div>
  )
}

export default App
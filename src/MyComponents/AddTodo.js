import React, { useState } from 'react';

const AddTodo = ({addTodo}) => {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
  return (
    <div className="container my-3">
        <h3>Add items</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" class="form-label">Item Name</label>
    <input type="text" class="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" class="form-label">Quantity</label>
    <input type="text" class="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc"/>
  </div>
  <button type="submit" class="btn btn-sm btn-success">Submit</button>
</form>
      
    </div>
  )
}

export default AddTodo

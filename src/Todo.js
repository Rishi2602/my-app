import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


const Todo = () => {
    const [title,setTitle]=useState("");
    const [todolist,setTodolist]=useState([]);
    
    function addtitle(){ 
       if(title!=""){
       setTodolist([...todolist,title]) 
       setTitle("")
       console.log(todolist)}
       else
       alert("Please Enter the title")
    }
    function Delete(id){
       console.log(id)
      const updatedtodo= todolist.filter((todo,index)=>{
         return index !=id
      })
      setTodolist(updatedtodo)
      }
    
    

 
 

return(
  <div>
    <div className="container-fluid navbox ">
 <nav className="navbar navbar-expand-lg navbar-dark">
    <a className="navbar-brand h2primary" href="">ToDo App</a>
     <button className="navbar-toggler dots" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
 </div>
</nav>
</div>

<div className="container-fluid header ">
    <div id="title-box">
       <h2>Add a Todo</h2>
       <h5 >Title</h5>
       <input id="task" type="text" name="title" placeholder="   Enter ToDo title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
       <button type="submit" className="btn btn-md- btn-primary my-3" id="todo-btn" name="task" onClick={addtitle}>Submit</button>
    </div>
</div>
{    todolist.map((todo,index)=>{
   return(
     <div id='todo'className='container my-2 py-2 px-2 wholediv' key={index}>
      <span>{todo}</span>
      <button onClick={()=>Delete(index)}>Delete</button>
     </div>)
     })
}
</div>
)
}

export default Todo;
import "./App.css";
import { useState,useRef } from "react";

function App() {
const [todoList, setToDoList] = useState([]);
const [currentTask, setCurrentTask] = useState();
const inputTask = useRef(null);
const  addTask= ()=>
{
  setToDoList([...todoList,{task:currentTask, completed:false}]);
  //console.log(todoList);
  inputTask.current.value="";
  setCurrentTask("");
}

const deleteTask = (taskToDelete)=>
{
    setToDoList(todoList.filter((task)=>{

     return task.task!==taskToDelete;

    }))
    
};

const completeTask = (taskToComplete)=>
{
  setToDoList(
    todoList.map((task)=>
  {

      return task.task ===taskToComplete ? {task:taskToComplete,completed:true} : {task:task.task,completed: task.completed ? true : false}


  }))


}



  return (
    <div className="App">
      <h1>To Do List</h1>
      <div>
        <input ref={inputTask} type="text" placeholder="task...." onChange={(event)=>{setCurrentTask(event.target.value)}}></input>
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr/>

      <ul>

        {todoList.map((val,key)=>
        {
            return ( <div id="tasks">
              <li key={key}>{val.task}</li>
              <button onClick={()=>{completeTask(val.task)}}>Completed</button>
              <button onClick={()=>{deleteTask(val.task)}}>X</button>

            {val.completed ? <h1>Completed </h1>:<h1>Not completed</h1>}


              </div>
              
             
              
              );
                     
           


        })}


      </ul>
    
    </div>
  );
}

export default App;

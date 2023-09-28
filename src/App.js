import "./App.css";
import { useState,useRef } from "react";
import checkedlogo from './checked.png';
import unchecklogo from './deleted.png';

function App() {
const [todoList, setToDoList] = useState([]);
const [currentTask, setCurrentTask] = useState();
const inputTask = useRef(null);
const  addTask= ()=>
{
  console.log(currentTask);
  if(currentTask==="" || currentTask===undefined)
  {
    alert("please add valid task name !!");
  }
  else{
    setToDoList([...todoList,{task:currentTask, completed:false}]);
  //console.log(todoList);
  inputTask.current.value="";
  setCurrentTask("");

  }
  
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

            {val.completed ? <div id="completed"><img src={checkedlogo} alt="check-img"></img> </div>:<div id="completed"><img src={unchecklogo} alt="check-img"></img></div>}

            {/* {val.completed ? <div id="completed">Completed</div>:<div id="completed">Not Completed</div>} */}
              </div>
              
             
              
              );
                     
           


        })}


      </ul>
    
    </div>
  );
}

export default App;

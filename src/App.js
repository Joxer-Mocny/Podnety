import { useState} from 'react'
import Header from './componets/Header'
import Tasks from './componets/Tasks'
import AddTask from './componets/AddTask'



function App() {
  const[showAddTask, setShowAddTask] = useState (false)
  
  const[tasks, setTasks] = useState([])

  

//Add Task
const addTask = (task) => {
  const id  = Math.floor(Math.random()* 1000)+1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])

}



const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.hide,  }  : task
      )
   )
 }


  



  return (
    <div className="container">
    <Header 
    onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}  />
    {showAddTask && <AddTask onAdd={addTask} />} 
    {tasks.length > 0 ? (
      
     <Tasks 
     tasks={tasks} onToggle={toggleReminder}/>
      ) : ('Žiaden podnet')}
       
    </div>
  )
}




export default App;
 
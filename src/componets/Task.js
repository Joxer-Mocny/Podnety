
import '../App'

const Task = ({ task,  onToggle,  }) => {
    
    
    
    return (
        <div onClick={() => onToggle(task.id)} >
            <p>{task.text}, {task.text1}, {task.image}</p>
        <div> 
        <p className={`task ${task.hide ? '' : 'reminder'}`} >{task.text2} {task.day} . {task.month} . {task.year} </p> </div>  
              
        </div>
    );
    
    
}



export default Task

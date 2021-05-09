import "../App";

const Task = ({ task, onToggle }) => {
  return (
    <div onClick={() => onToggle(task.id)}>
      <p>
        {task.text} {task.text1}
      </p>
      <img src={task.img.imagePreviewUrl} style={{ width: "200px" }} />
      <div>
        <p className={`task ${task.hidden === true ? "hidden" : ""}`}>
          {task.text2} {task.date}
        </p>
      </div>
    </div>
  );
};

export default Task;

import useTasks from "../hooks/useTasks";
import "../styles/TaskList.css"


const TaskList = () => {
  const {task, tasks, setTask, toggleTaskCompletion, toggleTaskDelete, handleKeyDown} = useTasks();
  

  return (
    <>
      <div className="tasks-container">
        <h1>ToDo!</h1>
        
        <input
          type="text"
          value={task.description}
          className="input-task"
          placeholder="Add TO DO"
          onChange={(event) => setTask({description:event.target.value, isDone: false, _id:0})}
          onKeyDown={handleKeyDown}
        />


        <div className="tasks-list">
          {tasks.map((t, index) => (
            <div key={index} className="task">
              <span className={t.isDone ? 'task-done' : ''}>{t.description}</span>
              <div className="buttons">
                <button className="btn-complete" onClick={() => toggleTaskCompletion(index)}>
                  <div className={t.isDone ? 'complete' : ''} ></div>
                </button>
                <button  className="btn-delete" onClick={() => toggleTaskDelete(index)}>X</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskList;

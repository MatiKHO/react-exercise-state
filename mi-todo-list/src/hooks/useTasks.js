import { useState } from "react";

const useTasks = () => {
  const [task, setTask] = useState({ description: "", isDone: false, _id: 0 });
  const [tasks, setTasks] = useState([]);

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((t, i) => {
      if (i === index) {
        return { ...t, isDone: !t.isDone };
      }
      return t;
    });
    setTasks(updatedTasks);
  };

  const toggleTaskDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

 

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setTasks([...tasks, task]);
      setTask({ description: "", isDone: false, _id: 0 });
    }
  };



  return {
    task,
    tasks,
    setTask,
    toggleTaskCompletion,
    toggleTaskDelete,
    handleKeyDown,
  };
};

export default useTasks;

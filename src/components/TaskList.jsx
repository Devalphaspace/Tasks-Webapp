import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onEditTask, onDeleteTask, onToggleCompleted }) => {
  const reversedTasks = tasks.slice().reverse();
  return (
    <ul className=" ">
      {reversedTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onToggleCompleted={onToggleCompleted}
        />
      ))}
    </ul>
  );
};

export default TaskList;

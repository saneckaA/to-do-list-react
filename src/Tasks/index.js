import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="task">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`task__item${task.done && hideDoneTasks
          ? " task__item--hidden"
          : ""}`
        }
      >
        <button className="task__button">
          {task.done ? "✓" : ""}
        </button>
        <span className={`task__{task.done ? " task__item--done" : ""}`}>
          {task.content}
        </span>
        <button className="task__button task__button--special">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
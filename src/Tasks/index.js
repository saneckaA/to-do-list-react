import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="task">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`task__item${task.done && hideDone ? " task__item--hidden": ""}`
        }
      >
        <button 
          className="task__button"
          onClick ={() => toggleTaskDone(task.id)}
          >
          {task.done ? "✓" : ""}
        </button>
        <span className={task.done ? " task__item--done " : ""}>
          {task.content}
        </span>
        <button 
          className="task__button task__button--special"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
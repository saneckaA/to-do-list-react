import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
  <ul className="task">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`task__item${task.done && hideDone ? " task__item--hidden": ""}`
        }
      >
        <button className="task__button">
          {task.done ? "✓" : ""}
        </button>
        <span className={task.done ? " task__item--done " : ""}>
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
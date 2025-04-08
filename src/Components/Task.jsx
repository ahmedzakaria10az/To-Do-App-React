import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center ">
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.completed ? 'text-decoration-line-through' : ''}>
          {task.text}
        </span>
      </div>
      <button className="btn btn-sm btn-danger" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
};

export default Task;

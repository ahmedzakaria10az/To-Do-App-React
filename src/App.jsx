import React, { useState } from 'react';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <div className="bg-primary text-white p-5 text-center">
        <h1 className="mb-2">To-Do App!</h1>
        <p>Add New To-Do</p>
        <div className="container">
          <AddTask addTask={addTask} />
        </div>
      </div>

      <div className="container text-center my-5">
        <h3>Let's get some work done!</h3>
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      </div>
    </div>
  );
};

export default App;

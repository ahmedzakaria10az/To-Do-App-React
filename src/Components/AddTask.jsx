import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center my-3">
      <input
        type="text"
        value={input}
        className="form-control form-control-lg w-75 me-2"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter new task"
      />
      <button className="btn btn-outline-light btn-lg" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTask;

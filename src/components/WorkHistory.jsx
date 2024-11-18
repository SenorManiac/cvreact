import React, { useState } from 'react';

function WorkHistory({ workHistory, setWorkHistory, newWork, setNewWork, editIndex, setEditIndex, onEdit, onRemove }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWork(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddWork = () => {
    if (editIndex !== null) {
      // Update existing work entry
      const updatedWorkHistory = [...workHistory];
      updatedWorkHistory[editIndex] = newWork;
      setWorkHistory(updatedWorkHistory);
      setEditIndex(null); // Reset edit index
    } else {
      // Add new work entry
      setWorkHistory([...workHistory, newWork]);
    }
    setNewWork({ company: '', position: '', tasks: '', startDate: '', endDate: '' });
  };

  const handleEdit = (index) => {
    const workToEdit = workHistory[index];
    setNewWork(workToEdit);
    setEditIndex(index); // Set the edit index
  };

  return (
    <div id='work-history'>
      <div id='work-input'>
        <h2>Your Work History</h2>
        <input 
          type="text" 
          name="company" 
          value={newWork.company} 
          onChange={handleChange} 
          placeholder="Company" 
        />
        <input 
          type="text" 
          name="position" 
          value={newWork.position} 
          onChange={handleChange} 
          placeholder="Position" 
        />
        <input 
          type="text" 
          name="startDate" 
          value={newWork.startDate} 
          onChange={handleChange} 
          placeholder="Start Date" 
        />
        <input 
          type="text" 
          name="endDate" 
          value={newWork.endDate} 
          onChange={handleChange} 
          placeholder="End Date" 
        />
        <textarea 
          name="tasks" 
          value={newWork.tasks} 
          onChange={handleChange} 
          placeholder="Job Duties" 
        />
        <button onClick={handleAddWork}>{editIndex !== null ? 'Update Work' : 'Add Work'}</button>
      </div>
      <div id='work-list'>
        <h2>Work History List</h2>
        {workHistory.map((work, index) => (
          <div className='worklist' key={index}>
            <p>Company: {work.company}</p>
            <p>Position: {work.position}</p>
            <p style={{ whiteSpace: 'pre-wrap' }}>Tasks: {work.tasks}</p>
            <p>Start Date: {work.startDate}</p>
            <p>End Date: {work.endDate}</p>
            <div id='work-buttons'>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => onRemove(index)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkHistory;
import React, { useState } from 'react';

function Education({ education, setEducation, onEdit, onRemove }) {
  const [newEducation, setNewEducation] = useState({
    school: '',
    degree: '',
    graduationYear: ''
  });
  const [editIndex, setEditIndex] = useState(null); // Track the index of the education entry being edited

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEducation(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddEducation = () => {
    if (editIndex !== null) {
      // Update existing education entry
      const updatedEducation = [...education];
      updatedEducation[editIndex] = newEducation;
      setEducation(updatedEducation);
      setEditIndex(null); // Reset edit index
    } else {
      // Add new education entry
      setEducation([...education, newEducation]);
    }
    setNewEducation({ school: '', degree: '', graduationYear: '' });
  };

  const handleEdit = (index) => {
    const educationToEdit = education[index];
    setNewEducation(educationToEdit);
    setEditIndex(index); // Set the edit index
  };

  return (
    <div id='education'>
      <div id='education-input'>
        <h2>Your Schools</h2>
        <input 
          type="text" 
          name="school" 
          value={newEducation.school || ''} 
          onChange={handleChange} 
          placeholder="School" 
        />
        <input 
          type="text" 
          name="degree" 
          value={newEducation.degree || ''} 
          onChange={handleChange} 
          placeholder="Degree" 
        />
        <input 
          type="text" 
          name="graduationYear" 
          value={newEducation.graduationYear || ''} 
          onChange={handleChange} 
          placeholder="Graduation Year" 
        />
        <button onClick={handleAddEducation}>
          {editIndex !== null ? 'Update Education' : 'Add Education'}
        </button>
      </div>
      <div id='education-list'>
        <h2>Education List</h2>
        {education && education.length > 0 ? (
          education.map((edu, index) => (
            <div key={index}>
              <p>School: {edu.school}</p>
              <p>Degree: {edu.degree}</p>
              <p>Graduation Year: {edu.graduationYear}</p>
              <div id='education-buttons'>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => onRemove(index)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <p>No education records available.</p>
        )}
      </div>
    </div>
  );
}

export default Education;
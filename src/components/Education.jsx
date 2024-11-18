import React, { useState } from 'react';

function Education({ education, setEducation, onEdit, onRemove }) {
    const [newEducation, setNewEducation] = useState({
        school: '',
        degree: '',
        graduationYear: ''
    });
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEducation(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddEducation = () => {
        if (editIndex !== null) {
            const updatedEducation = education.map((edu, index) =>
                index === editIndex ? newEducation : edu
            );
            setEducation(updatedEducation);
            setEditIndex(null);
        } else {
            setEducation([...education, newEducation]);
        }
        setNewEducation({ school: '', degree: '', graduationYear: '' });
    };

    const handleEditEducation = (index) => {
        const educationToEdit = education[index];
        setNewEducation(educationToEdit);
        setEditIndex(index);
    };

    const handleRemoveEducation = (index) => {
        const updatedEducation = education.filter((_, i) => i !== index);
        setEducation(updatedEducation);
    };

    return (
        <div id='education'>
                <div id='education-input'>
                        <h2>Your Schools</h2>
                        <input 
                                type="text" 
                                name="school" 
                                value={newEducation.school} 
                                onChange={handleChange} 
                                placeholder="School" 
                        />
                        <input 
                                type="text" 
                                name="degree" 
                                value={newEducation.degree} 
                                onChange={handleChange} 
                                placeholder="Degree" 
                        />
                        <input 
                                type="text" 
                                name="graduationYear" 
                                value={newEducation.graduationYear} 
                                onChange={handleChange} 
                                placeholder="Graduation Year" 
                        />
                        <button onClick={handleAddEducation}>
                            {editIndex !== null ? 'Update Education' : 'Add Education'}
                        </button>
                </div>
                <div id='education-list'>
                        <h2>Education List</h2>
                        {education.map((edu, index) => (
                                <div className='list' key={index}>
                                <p><h3>School:</h3> {edu.school}</p>
                                <p><h3>Degree:</h3> {edu.degree}</p>
                                <p><h3>Graduation Year:</h3> {edu.graduationYear}</p>
                                <div id='education-buttons'>
                                        <button onClick={() => handleEditEducation(index)}>Edit</button>
                                        <button onClick={() => handleRemoveEducation(index)}>Remove</button>
                                </div>
                                </div>
                                ))}
                </div>
        </div>
    );
}

export default Education;
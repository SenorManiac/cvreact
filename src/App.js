import React, { useState } from 'react';
import GeneralInformation from './components/GeneralInformation';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import DisplayResume from './components/DisplayResume';

function App() {
  const [generalInformation, setGeneralInformation] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '789-555-1234',
    location: '123 Main St, Anytown, USA',
    title: 'Software Engineer'
  });
  const [education, setEducation] = useState([
    {
      school: 'University of Example',
      degree: 'B.Sc. Computer Science',
      graduationYear: '2020'
    }
  ]);
  const [workHistory, setWorkHistory] = useState([
    {
      company: 'Tech Solutions',
      position: 'Software Engineer',
      tasks: 'Designed and implemented software solutions\nLed a team of developers\nConducted code reviews',
      startDate: '2021-02-01',
      endDate: 'Present'
    },
    {
      company: 'Example Corp',
      position: 'Junior Developer',
      tasks: 'Developed web applications\nCollaborated with team members\nFixed bugs and issues',
      startDate: '2020-01-01',
      endDate: '2021-01-01'
    }

  ]);
  const [newWork, setNewWork] = useState({
    company: '',
    position: '',
    tasks: '',
    startDate: '',
    endDate: ''
  });


  const [editIndex, setEditIndex] = useState(null); // Track the index of the work entry being edited

  const handleEditEducation = (index, updatedEducation) => {
    const newEducation = [...education];
    newEducation[index] = updatedEducation;
    setEducation(newEducation);
  };

  const handleRemoveEducation = (index) => {
    const newEducation = education.filter((_, i) => i !== index);
    setEducation(newEducation);
  };

  const handleEditWorkHistory = (index) => {
    const workToEdit = workHistory[index];
    setNewWork(workToEdit);
    setEditIndex(index); // Set the edit index
  };

  const handleRemoveWorkHistory = (index) => {
    const newWorkHistory = workHistory.filter((_, i) => i !== index);
    setWorkHistory(newWorkHistory);
  };

  return (
    <div id='resume-complete'>
      <div id='resume-builder'>
        <h1>Resume Builder</h1>
        <button onClick={() => {
          setGeneralInformation({
            name: '',
            email: '',
            phone: '',
            location: '',
            title: ''
          });
          setEducation([]);
          setWorkHistory([]);
        }}>Clear Form</button>

        <button onClick={() => {
          setGeneralInformation({
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            phone: '789-555-1234',
            location: '123 Main St, Anytown, USA',
            title: 'Software Engineer'
          });
          setEducation([
            {
              school: 'University of Example',
              degree: 'B.Sc. Computer Science',
              graduationYear: '2020'
            }
          ]);
          setWorkHistory([
            {
              company: 'Tech Solutions',
              position: 'Software Engineer',
              tasks: 'Designed and implemented software solutions\nLed a team of developers\nConducted code reviews',
              startDate: '2021-02-01',
              endDate: 'Present'
            },
            {
              company: 'Example Corp',
              position: 'Junior Developer',
              tasks: 'Developed web applications\nCollaborated with team members\nFixed bugs and issues',
              startDate: '2020-01-01',
              endDate: '2021-01-01'
            }
          ]);
        }}>Generate Example</button>
        <div id='general-information'>
          <GeneralInformation 
            generalInformation={generalInformation} 
            setGeneralInformation={setGeneralInformation} 
          />
        </div>
        <div id='education'>
        <Education 
            education={education} 
            setEducation={setEducation} 
            onEdit={handleEditEducation} 
            onRemove={handleRemoveEducation} 
          />
        </div>
        <div id='work-history'>
          <WorkHistory 
            workHistory={workHistory} 
            setWorkHistory={setWorkHistory} 
            newWork={newWork}
            setNewWork={setNewWork}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
            onEdit={handleEditWorkHistory} 
            onRemove={handleRemoveWorkHistory} 
          />
        </div>
      </div>
      <div id='resume-preview'>
        <DisplayResume 
          generalInformation={generalInformation} 
          education={education} 
          workHistory={workHistory} 
        />
      </div>
    </div>
  );
}

export default App;
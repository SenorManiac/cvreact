import { useState } from "react";

function WorkHistory() {

    const [workHistory, setWorkHistory] = useState([]);
    const [currentWork, setCurrentWork] = useState({
        company: '',
        position: '',
        tasks: '',
        startDate: '',
        endDate: ''
    });
    let blocked = false;

    const CheckForErrors = (e) => {
        const elements = e.target.elements;
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].value === '' && elements[i].name !== 'submit') {
                elements[i].style.border = '1px solid red';
                blocked = true;
            } else {
                elements[i].style.border = '';
            }
        }
    };

    const EditWork = (index) => {
        const workToEdit = workHistory[index];
        setCurrentWork(workToEdit);
        setWorkHistory(workHistory.filter((_, i) => i !== index));
        document.getElementById('work-form').style.display = 'flex';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        CheckForErrors(e);
        if (blocked) {
            blocked = false;
            return;
        } else {
            setWorkHistory([...workHistory, currentWork]);
            setCurrentWork({
                company: '',
                position: '',
                tasks: '',
                startDate: '',
                endDate: ''
            });
        }
        document.getElementById('work-form').style.display = 'none';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentWork({
            ...currentWork,
            [name]: value
        });
    };

    return (
        <div>
            <h2>Work History</h2>
            <form id="work-form" style={{ display: 'none' }} onSubmit={handleSubmit}>
                <input type="text" name="company" value={currentWork.company} onChange={handleChange} placeholder="Company" />
                <input type="text" name="position" value={currentWork.position} onChange={handleChange} placeholder="Position" />
                <input type="text" name="tasks" value={currentWork.tasks} onChange={handleChange} placeholder="Tasks" />
                <input type="text" name="startDate" value={currentWork.startDate} onChange={handleChange} placeholder="Start Date" />
                <input type="text" name="endDate" value={currentWork.endDate} onChange={handleChange} placeholder="End Date" />
                <button type="submit"name="submit">Submit</button>
            </form>
            <button onClick={() => document.getElementById('work-form').style.display = 'flex'}>Add Work</button>
            <ul>
                {workHistory.map((work, index) => (
                    <li key={index}>
                        <h3>{work.company}</h3>
                        <h4>{work.position}</h4>
                        <p>{work.tasks}</p>
                        <p>{work.startDate} - {work.endDate}</p>
                        <button onClick={() => EditWork(index)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WorkHistory;
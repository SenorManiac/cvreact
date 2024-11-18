import React from 'react';
import emailIcon from '../images/email.svg';
import phoneIcon from '../images/phone.svg';
import personIcon from '../images/person.svg';
import mapIcon from '../images/map.svg';
import editIcon from '../images/edit.svg';
import EditButton from './EditButton.jsx';

function DisplayResume({ generalInformation, education, workHistory }) {
    return (
        <div>
            <h1>Your Resume <EditButton onClick={() => document.getElementById('resume-builder').style.display = 'Flex'}/></h1>
            <div id='resumecontainer'>
                <div id='displayinformation'>
                    <p className='myname'><img src={personIcon} alt='person icon'/>{generalInformation.name}</p>
                    <p className='mytitle'>Job Title: {generalInformation.title}</p>
                    <p className='myemail'><img src={emailIcon} alt='email icon' /> {generalInformation.email}</p>
                    <p className='myphone'><img src={phoneIcon} alt='phone icon' /> {generalInformation.phone}</p>
                    <p className='mylocation'><img src={mapIcon} alt='my location icon'/> {generalInformation.location}</p>
                </div>

                <div id='displaywork'>
                    <h2>Work History</h2>
                    <ul>
                    {workHistory.map((work, index) => (
                        <li key={index}>
                        <div className='displayworklist'>
                            <p>Company: {work.company}</p>
                            <p>Position: {work.position}</p>
                            <p>Start Date: {work.startDate}</p>
                            <p>End Date: {work.endDate}</p>
                            <p className='jobduties' style={{ whiteSpace: 'pre-wrap' }}>Job Duties: {work.tasks}</p>
                        </div>
                        </li>
                    ))}
                    </ul>
                </div>

                <div id='displayeducation'>
                    <h2>Education</h2>
                    {education.map((edu, index) => (
                        <div key={index}>
                            <ul>
                                <li className='list'>
                                    <p>School: {edu.school}</p>
                                    <p>Degree: {edu.degree}</p>
                                    <p>Graduation Year: {edu.graduationYear}</p>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            
            </div>
        </div>
    );
}

export default DisplayResume;
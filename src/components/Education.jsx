import { useState } from "react";

function Education() {
    const [educations, setEducations] = useState([]);
    const [currentEducation, setCurrentEducation] = useState({
        school: '',
        degree: '',
        graduationYear: '',
        gpa: '',
        courses: ''
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

    const EditEducation = (index) => {
        const educationToEdit = educations[index];
        setCurrentEducation(educationToEdit);
        setEducations(educations.filter((_, i) => i !== index));
        document.getElementById('education-form').style.display = 'flex';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        CheckForErrors(e);
        if (blocked) {
            blocked = false;
            return;
        } else {
            setEducations([...educations, currentEducation]);
            setCurrentEducation({
                school: '',
                degree: '',
                graduationYear: '',
                gpa: '',
                courses: ''
            });
        }
        document.getElementById('education-form').style.display = 'none';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentEducation({
            ...currentEducation,
            [name]: value
        });
    };

    return (
        <div>
            <h1>Education</h1>
            <button onClick={() => document.getElementById('education-form').style.display = 'flex'}>Add Education</button>
            <form id= 'education-form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="school"
                    value={currentEducation.school}
                    onChange={handleChange}
                    placeholder="School"
                />
                <input
                    type="text"
                    name="degree"
                    value={currentEducation.degree}
                    onChange={handleChange}
                    placeholder="Degree"
                />
                <input
                    type="text"
                    name="graduationYear"
                    value={currentEducation.graduationYear}
                    onChange={handleChange}
                    placeholder="Graduation Year"
                />
                <input
                    type="text"
                    name="gpa"
                    value={currentEducation.gpa}
                    onChange={handleChange}
                    placeholder="GPA"
                />
                <input
                    type="text"
                    name="courses"
                    value={currentEducation.courses}
                    onChange={handleChange}
                    placeholder="Courses"
                />
                <button type="submit" name="submit">Submit</button>
            </form>
            <div className="educations">
                {educations.map((education, index) => (
                    <div className='education-details'key={index}>
                        <h3>{education.school} <button onClick={() => EditEducation(index)}>Edit</button></h3>
                        <div>
                            <p><h3>Degree: </h3> {education.degree}</p>
                            <p><h3>Graduation Year: </h3> {education.graduationYear}</p>
                            <p><h3>GPA: </h3> {education.gpa}</p>
                            <p><h3>Courses:</h3> {education.courses}</p>
                        </div>
                        
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
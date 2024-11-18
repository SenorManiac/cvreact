import React from 'react';

function GeneralInformation({ generalInformation, setGeneralInformation }) {
    console.log('Received props in GeneralInformation:', generalInformation);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setGeneralInformation(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div id='information'>
            <h2>Your Info</h2>
            <input 
                type="text" 
                name="name" 
                value={generalInformation.name} 
                onChange={handleChange} 
                placeholder="Name" 
            />
            <input 
                type="email" 
                name="email" 
                value={generalInformation.email} 
                onChange={handleChange} 
                placeholder="Email" 
            />
            <input 
                type="tel" 
                name="phone" 
                value={generalInformation.phone} 
                onChange={handleChange} 
                placeholder="Phone" 
            />
            <input 
                type="text" 
                name="location" 
                value={generalInformation.location} 
                onChange={handleChange} 
                placeholder="Location" 
            />
            <input
                type="text"
                name="title"
                value={generalInformation.title}
                onChange={handleChange}
                placeholder="Job Title"
            />
        </div>
    );
}

export default GeneralInformation;
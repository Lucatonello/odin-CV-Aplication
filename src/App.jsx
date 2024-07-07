import { useState } from 'react'
import './App.css'
import { person } from './data.js';

function App() {
  const [formData, setFormData] = useState(person);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      generalInfo: {
        ...prevState.generalInfo,
        [name]: value
      }
    }));
  }
  function handleEducationChange(e, index) {
    const { name, value } = e.target;
    const updatedEducation = [...formData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value
    };
    setFormData(prevState => ({
      ...prevState,
      education: updatedEducation
    }));
  }
  function handleExperienceChange(e, index) {
    const { name, value } = e.target;
    const updatedExperience = [...formData.experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value
    };
    setFormData(prevState => ({
      ...prevState,
      experience: updatedExperience
    }));
  }
 
  return (
    <div className="page-wrapper">
      <div className="input-container">
        <h3>Basic information</h3>
        <label htmlFor="name">Name</label>
        <input 
          type="text"
          id="name"
          name="name"
          value={formData.generalInfo.name}
          onChange={handleInputChange}
        />

        <label htmlFor="Ocupation">Ocupation</label>
        <input 
          type="text"
          id="ocupation"
          name="ocupation"
          value={formData.generalInfo.ocupation}
          onChange={handleInputChange}
        />

        <label htmlFor="Email">Email</label>
        <input 
          type="text"
          id="email"
          name="email"
          value={formData.generalInfo.email}
          onChange={handleInputChange}
         />

        <label htmlFor="Phone">Phone</label>
        <input 
          type="text"
          id="phone"
          name="phone"
          value={formData.generalInfo.phone}
          onChange={handleInputChange}
         />
  
        <h3>Education</h3>
        {formData.education.map((edu, index) => (
          <div className='edu-xp-input' key={index}>
            <label htmlFor={`school_${index}`}>School</label>
            <input 
              type="text"
              id={`school_${index}`}
              name="school"
              value={edu.school}
              onChange={(e) => handleEducationChange(e, index)}
            />
            <label htmlFor="Major">Major</label>
            <input 
              type="text"
              id={`major_${index}`}
              name="major"
              value={edu.major}
              onChange={(e) => handleEducationChange(e, index)}
           />
           <label htmlFor="Date">Date</label>
           <input 
              type="text"
              className='last-date'
              id={`date${index}`}
              name="date"
              value={edu.date}
              onChange={(e) => handleEducationChange(e, index)}
           />
        </div>
        ))}

        <h3>Experience</h3>
        {formData.experience.map((xp, index) => (
          <div className='edu-xp-input' key={index}>
            <label htmlFor="Company">Company</label>
            <input 
              type="text"
              id={`company${index}`}
              name="company"
              value={xp.company}
              onChange={(e) => handleExperienceChange(e, index)}
           />

            <label htmlFor="Position">Position</label>
            <input 
              type="text"
              id={`position${index}`}
              name="position"
              value={xp.position}
              onChange={(e) => handleExperienceChange(e, index)}
           />

            <label htmlFor="Responsibilities">responsibilities</label>
            <input 
              type="text"
              id={`responsibilities${index}`}
              name="responsibilities"
              value={xp.responsibilities}
              onChange={(e) => handleExperienceChange(e, index)}
           />

            <label htmlFor="Date">Date</label>
            <input 
              type="text"
              className='last-date'
              id={`date${index}`}
              name="date"
              value={xp.date}
              onChange={(e) => handleExperienceChange(e, index)}
           />
          </div>
        ))}
        
      </div>

      <div className="cv-container">
        <h1 id="name">{formData.generalInfo.name}</h1>
        <h2>{formData.generalInfo.ocupation}</h2>

        <p><b>Email: </b>{formData.generalInfo.email}</p>
        <p><b>Phone: </b>{formData.generalInfo.phone} </p>

        <h1>Education</h1>

        <hr />
        {formData.education.map((edu, index) => (
          <div key={index}> 
            <p><b>School: </b>{edu.school}</p>
            <p><b>Major: </b>{edu.major}</p>
            <p><b>Date: </b>{edu.date}</p>
          </div>
        ))}
        

        <h1>Experience</h1>
        <hr />
        {formData.experience.map((xp, index) => (
          <div key={index}>
            <p><b>company: </b>{xp.company}</p>
            <p><b>position: </b>{xp.position}</p>
            <p><b>responsabilities: </b>{xp.responsibilities}</p>
            <p><b>date: </b>{xp.date}</p>
          </div>
        ))}
    
        
      </div>
    </div>
  )
}

export default App
